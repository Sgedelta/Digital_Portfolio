const classes = require('./classes.js');
const utils = require('./utilities.js');


const app = new PIXI.Application({
    width: 800,
    height: 800,
});
document.body.appendChild(app.view);

let sceneHeight = app.view.height;	
let sceneWidth = app.view.width;
const gameHolder = document.querySelector("#gameHolder");


//load some fonts
const Roboto = 'Roboto Mono';

// pre-load the images (this code works with PIXI v6)
app.loader.
    add([
        "./assets/img/Herder/food.png",
        "./assets/img/Herder/herdAgent.png",
        "./assets/img/Herder/hunterAgent.png"
    ]);
app.loader.onProgress.add(e => { console.log(`progress=${e.progress}`) });
app.loader.onComplete.add(setup);
app.loader.load();

// aliases
let stage;

// game variables
let startScene;
let gameScene;
let gameOverScene;

let herd = [];
let hunters = [];
let foodList = [];
let paused = true;

let steerStr = .5;
let maxHunterSpeed = 60;

let maxHerdSize = 0;
let score = 0;
let maxScore = 0;

let oldHerdSize = 0;
let timeAtCurrHerdSize = 0;

let timer = 0;

let scoreLabel;
let maxScoreLabel;
let gameOverScoreMessage;
let gameOverScoreMessageStyle;

let bgMusic, hunterHurt, herdHurt, herdReproduce;

function setup() {
	stage = app.stage;
	// Create the `start` scene
	startScene = new PIXI.Container();
    stage.addChild(startScene);

    
    

    

	// Create the main `game` scene and make it invisible
    gameScene = new PIXI.Container();
    gameScene.visible = false;
    stage.addChild(gameScene);

	// Create the `gameOver` scene and make it invisible
    gameOverScene = new PIXI.Container();
    gameOverScene.visible = false;
    stage.addChild(gameOverScene);

	// Create labels for all 3 scenes
	createLabelsAndButtons();
	
	// Load Sounds
	bgMusic = new Howl({
        src: ['./assets/audio/Herder/HerderTheme.mp3'],
        loop: true,
        volume: .3,
        onloaderror: function(id, error) {
            console.error('Error loading sound:', id, error);
          }
    });
    
    hunterHurt = new Howl({
        src: ['./assets/audio/Herder/HunterHurt.wav'],
        volume: .6
    });

    herdHurt = new Howl({
        src: ['./assets/audio/Herder/HerdHurt.wav'],
        volume: .4
    });

    herdReproduce = new Howl({
        src: ['./assets/audio/Herder/HerdReproduce.wav'],
        volume: .3
    });
	
	// Start update loop
	app.ticker.add(gameLoop);
	// Start listening for click events on the canvas
	// Now our `startScene` is visible
	// Clicking the button calls startGame()
}

function createLabelsAndButtons() {
    let buttonStyle = new PIXI.TextStyle({
        fill: 0x33ff33,
        fontSize: 48,
        fontFamily: "Roboto Mono"
    });

    let startLabel1 = new PIXI.Text("Herder");
    startLabel1.style = new PIXI.TextStyle({
        fill: 0x33ff33,
        fontSize: 96,
        fontFamily: "Roboto Mono",
        stroke: 0x33ff33,
        strokeThinkness: 2
    });
    let startLabelMetrics = PIXI.TextMetrics.measureText("Herder", startLabel1.style);
    startLabel1.x = (sceneWidth/2) - (startLabelMetrics.width/2);
    startLabel1.y = 120;
    startScene.addChild(startLabel1);

    
    let startButton = new PIXI.Text("[P L A Y]");
    startButton.style = buttonStyle;
    let startButtonMetrics = PIXI.TextMetrics.measureText("[P L A Y]", buttonStyle);
    startButton.x = (sceneWidth/2) - (startButtonMetrics.width/2) ;
    startButton.y = sceneHeight - 150;
    startButton.interactive = true;
    startButton.buttonMode = true;
    startButton.on("pointerup", startGame);
    startButton.on('pointerover', e=> e.target.alpha = .7);
    startButton.on('pointerout', e=> e.currentTarget.alpha = 1);
    startScene.addChild(startButton);


    let textStyle = new PIXI.TextStyle({
        fill: 0xFFFFFF,
        fontSize: 18,
        fontFamily: "Roboto Mono",
        stroke: 0xFF0000,
        strokeThickness: 4
    });




    // 3 - set up `gameOverScene`
    // 3A - make game over text
    let gameOverText = new PIXI.Text("Game Over!");
    textStyle = new PIXI.TextStyle({
    	fontSize: 64,
    	fontFamily: "Roboto Mono",
    	stroke: 0xFF0000,
    	strokeThickness: 6
    });
    gameOverText.style = textStyle;
    let GameOverMetrics = PIXI.TextMetrics.measureText("Game Over", gameOverText.style);
    gameOverText.x = (sceneWidth/2) - (GameOverMetrics.width/2);
    gameOverText.y = sceneHeight/2 - 160;
    gameOverScene.addChild(gameOverText);

    gameOverScoreMessage = new PIXI.Text("TEST");
    gameOverScoreMessageStyle =  new PIXI.TextStyle({
        fontFamily: "Roboto Mono",
        fontSize: 30,
        fill: 0x00FF00
    })
    gameOverScoreMessage.style = gameOverScoreMessageStyle;
    gameOverScoreMessage.y = sceneHeight/2 - 60;
    gameOverScene.addChild(gameOverScoreMessage);


    // 3B - make "play again?" button
    let playAgainButton = new PIXI.Text("Play Again?");
    playAgainButton.style = buttonStyle;
    let playAgainMetric = PIXI.TextMetrics.measureText("Play Again?", buttonStyle);
    playAgainButton.x = (sceneWidth/2) - (playAgainMetric.width/2);
    playAgainButton.y = sceneHeight - 100;
    playAgainButton.interactive = true;
    playAgainButton.buttonMode = true;
    playAgainButton.on("pointerup",startGame); // startGame is a function reference
    playAgainButton.on('pointerover',e=>e.target.alpha = 0.7); // concise arrow function with no brackets
    playAgainButton.on('pointerout',e=>e.currentTarget.alpha = 1.0); // ditto
    gameOverScene.addChild(playAgainButton);


    scoreLabel = new PIXI.Text("Score: ");
    scoreLabel.style = new PIXI.TextStyle({
        fontFamily: "Roboto Mono",
        fontSize: 30,
        fill: 0x00FF00

    });
    scoreLabel.x = 5;
    scoreLabel.y = 5;
    gameScene.addChild(scoreLabel);

    maxScoreLabel = new PIXI.Text("High Score: ");
    maxScoreLabel.style = scoreLabel.style;
    maxScoreLabel.x = 5;
    maxScoreLabel.y = 35;
    gameScene.addChild(maxScoreLabel);

}

function startGame() {
    startScene.visible = false;
    gameOverScene.visible = false;
    gameScene.visible = true;
    //clear out hunters for restart
    for(let hunterAgent of hunters) {
        hunterAgent.isAlive = false;
        gameScene.removeChild(hunterAgent);
    }
    hunters = hunters.filter(a=>a.isAlive);
    maxHunterSpeed = 60;
    maxHerdSize = 0;
    createHerd(5);
    loadLevel();
    score = 0;

    bgMusic.play();
    
}



function gameLoop(){
	if (paused) return; 
	
   
	// #1 - Calculate "delta time"
	let dt = 1/app.ticker.FPS;
    if (dt > 1/12) dt=1/12;

    timer += dt;
	
	// check max herd size and do scoring
	checkMaxHerdSize();
    DoScore(dt);


    //Calculate Herd Desired Pos
        //Get Herd Center & dir
    let herdCenter = {x:0,y:0};
    let herdDir = 0;
    for(let herdAgent of herd) {
        herdCenter = {
            x: herdCenter.x + (herdAgent.x / herd.length),
            y: herdCenter.y + (herdAgent.y / herd.length)
        };
        herdDir = herdDir + herdAgent.rotation/herd.length;
    }

    let herdDirVec = {x: Math.cos(herdDir), y: Math.sin(herdDir) };

        //Steer Agents
    for (let herdAgent of herd) {
        //cohesion
        let steeringStr;
        if(herd.length == 1) {
            steeringStr = 1;
        } else {
            steeringStr = 1/(herd.length-1);
        }
        herdAgent.seek(herdCenter.x, herdCenter.y, steeringStr);
        //borders
        if(herdAgent.x <= herdAgent.borderSize || herdAgent.x >= sceneWidth - herdAgent.borderSize) {
            herdAgent.seek(sceneWidth/2, herdCenter.y, 10);
        }
        if(herdAgent.y <= herdAgent.borderSize || herdAgent.y >= sceneHeight - herdAgent.borderSize) {
            herdAgent.seek(herdCenter.x, sceneHeight/2, 10);
        }

        if(herdAgent.x <= (herdAgent.borderSize/2) || herdAgent.x >= sceneWidth - (herdAgent.borderSize/2)) {
            herdAgent.reflectX();
        }
        if(herdAgent.y <= (herdAgent.borderSize/2) || herdAgent.y >= sceneHeight - (herdAgent.borderSize/2)) {
            herdAgent.reflectY();
        }

        //avoidance
        for(let otherAgent of herd) {
            if(herdAgent == otherAgent) {
                continue;
            } //don't count ourselves for this!

            let distance = utils.vectMag((herdAgent.x - otherAgent.x), (herdAgent.y - otherAgent.y));
            let avoidStr = .9;
            if( distance <= herdAgent.avoidanceDist) {
                herdAgent.flee(otherAgent.x, otherAgent.y, avoidStr * herdAgent.avoidanceDist/distance);
            }

        }
        //alignment

        herdAgent.seek(herdAgent.x + herdDirVec.x, herdAgent.y + herdDirVec.y, 2);



        //seek food
        let foodSeekStr = 150;
        let nearestFood = -1;
        if(foodList.length != 0) {
            for(let foodItem of foodList) {
                if(nearestFood == -1) {
                    nearestFood = foodItem;
                }
                let distance = utils.vectMag(herdAgent.x - foodItem.x, herdAgent.y - foodItem.y)
    
                if(distance < utils.vectMag(herdAgent.x - nearestFood.x, herdAgent.y - nearestFood.y)) {
                    nearestFood = foodItem
                }
                
            }
            let nearestFoodDist = utils.vectMag(herdAgent.x - nearestFood.x, herdAgent.y - nearestFood.y);
            if(nearestFoodDist <= herdAgent.foodSeekDistance) {
                herdAgent.seek(nearestFood.x, nearestFood.y, foodSeekStr/nearestFoodDist);
            } else {
                herdAgent.seek(nearestFood.x, nearestFood.y, .4*foodSeekStr/nearestFoodDist);
            }
        }
        

        //flee nearby hunters
        let hunterFleeStr = 10
        for(let hunterAgent of hunters) {
            let distance = utils.vectMag(herdAgent.x - hunterAgent.x, herdAgent.y - hunterAgent.y);
            if(distance <= herdAgent.hunterFleeDistance) {
                herdAgent.flee(hunterAgent.x, hunterAgent.y, hunterFleeStr);
            }
        }
    }

    //steer hunters
    for(let hunterAgent of hunters) {
        let nearestHerd;
        let nearestDist = 1000000000; //always higher than our nearest one
        for(let herdAgent of herd) {
            let distance = utils.vectMag(herdAgent.x - hunterAgent.x, herdAgent.y - hunterAgent.y);
            if(distance <= nearestDist) {
                nearestDist = distance;
                nearestHerd = herdAgent;
            }
        }
        if(nearestDist <= hunterAgent.huntDistance) {
            hunterAgent.seek(nearestHerd.x, nearestHerd.y);
        } else {
            hunterAgent.seek(herdCenter.x, herdCenter.y);
        }

        for( let otherHunter of hunters ) {
            let distance = utils.vectMag(hunterAgent.x - otherHunter.x, hunterAgent.y - otherHunter.y);
            if(distance <= hunterAgent.avoidanceDist) {
                hunterAgent.flee(otherHunter.x, otherHunter.y, 1);
            }
        }
        
    }
	
	// #3 - Move Herd
    //herd agents normalize desired,
    //then steer fwd toward desired
    //then, reset desired
	for (let herdAgent of herd) {
        herdAgent.normalizeDesiredDir();

        herdAgent.steer(steerStr * dt);

        herdAgent.resetDesired();

        herdAgent.rotateToFwd();
        herdAgent.move(dt);
        
        
        
    }
	
	// #4 - Move Hunters - same as herd
	for (let hunterAgent of hunters) {
        hunterAgent.normalizeDesiredDir();

        hunterAgent.steer(steerStr * dt);

        hunterAgent.resetDesired();

        hunterAgent.rotateToFwd();
        hunterAgent.move(dt);
        
    }
	
	// #5 - Check for Collisions
	for(let herdAgent of herd) {
        //hunter eats herd
        for(let hunterAgent of hunters) {
            if(herdAgent.isAlive && utils.rectsIntersect(herdAgent, hunterAgent)) {
                //hitSound.play();
                gameScene.removeChild(herdAgent);
                herdAgent.isAlive = false;
                herdHurt.play();
                herd = herd.filter(a=>a.isAlive);
                hunterAgent.eatenAgents++;
                if(hunterAgent.eatenAgents >= hunterAgent.cloneThreshold) {
                    hunterAgent.eatenAgents = 0;
                    createHunters(2, hunterAgent.speed * 1.1);
                    hunterAgent.speed *= 1.2;
                }
            }
        }
        //herd eats food
        for(let foodItem of foodList) {
            if(herdAgent.isAlive && utils.rectsIntersect(herdAgent, foodItem)) {
                gameScene.removeChild(foodItem);
                foodItem.isEaten = true;
                createHerd(2);
                herdReproduce.play();
                foodList = foodList.filter(f=>!f.isEaten);
            }
        }
        
    }
	
    //filter lists
    herd = herd.filter(a=>a.isAlive);
	hunters = hunters.filter(a=>a.isAlive);
    foodList = foodList.filter(f=>!f.isEaten);


	// #7 - Is game over?
	if (herd.length == 0){
        end();
        return; // return here so we skip #8 below
    }
	
	// #8 - Load next level
    if (hunters.length == 0){
        loadLevel();
    }


}



function loadLevel(){
	paused = false;
    
    spawnFood(10);
    createHunters(Math.max(5, Math.trunc(herd.length / 3)));
}

function end() {
    paused = true;

    bgMusic.stop();

    gameOverScene.visible = true;
    gameScene.visible = false;
}

function fireBullet(e) {
    if(paused) return;


}

function createHerd(numAgents) {
    for(let i=0; i<numAgents; i++) {
        let newAgent = new classes.herdAgent( app, Math.random() * (sceneWidth - 50) + 25, Math.random() * (sceneHeight - 50) + 25);
        
        herd.push(newAgent);
        gameScene.addChild(newAgent);
    }
    checkMaxHerdSize();
    
}

function createHunters(numAgents, speed = maxHunterSpeed) {

    if(speed > maxHunterSpeed) {
        maxHunterSpeed = speed;
    }
    for(let i=0; i<numAgents; i++) {
        let rightLeft = Math.round(Math.random());
        let topBottom = Math.round(Math.random());
        let posX = sceneWidth * rightLeft;
        let posY = sceneHeight * topBottom;
        
        if(posX == 0) {
            posX -= 250;
        } else {
            posX += 250;
        }

        if(posY == 0) {
            posY -= 250;
        } else {
            posY += 250;
        }
        let newAgent = new classes.hunterAgent( app, posX, posY, speed);
        newAgent.interactive = true;

        newAgent.eventMode = 'dynamic';
        newAgent.cursor = 'pointer';
        newAgent.on('pointerup', e => {
            e.target.isAlive = false;
            gameScene.removeChild(e.target);
            hunterHurt.play();
        });
        
        hunters.push(newAgent);
        gameScene.addChild(newAgent);

        
    }
}


function spawnFood(numFood) {
    for(let i=0; i<numFood; i++) {
        let newFood = new classes.food(app, Math.random() * (sceneWidth - 50) + 25, Math.random() * (sceneHeight - 50) + 25);
        foodList.push(newFood);
        gameScene.addChild(newFood);
    }
}


function checkMaxHerdSize() {
    if(herd.length > maxHerdSize) {
        maxHerdSize = herd.length;
    }
    
}


function DoScore(dt) {

    let calculatedScoreBonus = 0;

    if(herd.length >= oldHerdSize) {
        timeAtCurrHerdSize += dt;
        oldHerdSize = herd.length;
    } else {
        

        if (oldHerdSize == maxHerdSize) {
            calculatedScoreBonus = Math.trunc(timeAtCurrHerdSize * herd.length);
        }
        if( herd.length < oldHerdSize) {
            timeAtCurrHerdSize = 0;
        } 
        oldHerdSize = herd.length;   
    }
    
    
    let scoreDelta = (herd.length * dt) + (calculatedScoreBonus);
    score += scoreDelta;
    if(score > maxScore) {
        maxScore = Math.trunc(score);
    }
    maxScoreLabel.text = "High Score: " + maxScore;
    let text = "Your Highest Score Was " + Math.trunc(score);
    gameOverScoreMessage.text = text;
    
    let Metrics = new PIXI.TextMetrics.measureText(text, gameOverScoreMessageStyle);
    gameOverScoreMessage.x = (sceneWidth/2) - (Metrics.width/2);


    scoreLabel.text = "Score: " + Math.trunc(score);

}



