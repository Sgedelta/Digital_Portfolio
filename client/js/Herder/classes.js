const utils = require('./utilities.js');

class agent extends PIXI.Sprite {
    constructor(load, x, y, scale, speed) {
        super(load);
        this.anchor.set(.5, .5);
        this.scale.set(scale);

        
        this.x = x;
        this.y = y;

        this.fwd = utils.getRandomUnitVector();
        this.desiredDirection = this.fwd;
        this.speed = speed;

        this.size = 10;
        this.borderSize = 30;
        

        this.isAlive = true;

        this.eventMode = 'dynamic';

    }

    move(dt=1/60) {
        this.x += this.fwd.x * this.speed * dt;
        this.y += this.fwd.y * this.speed * dt;
    }

    rotateToFwd() {
        this.rotation = Math.PI/2 + Math.atan2(this.fwd.y, this.fwd.x);
    }

    seek(targetX = 0, targetY = 0, str = 1) {
        this.desiredDirection = {
            x: this.desiredDirection.x + (targetX - this.x)*str,
            y: this.desiredDirection.y + (targetY - this.y)*str
        }
    }

    flee(targetX = 0, targetY = 0, str = 1) {
        this.desiredDirection = {
            x: this.desiredDirection.x - (targetX - this.x)*str,
            y: this.desiredDirection.y - (targetY - this.y)*str
        }
    }

    normalizeDesiredDir() {
        let x = this.desiredDirection.x;
        let y = this.desiredDirection.y;
        let length = Math.sqrt(x*x + y*y);
        
        if(length == 0){ // very unlikely
            x=1; // point right
            y=0;
            length = 1;
        } else{
            x /= length;
            y /= length;
        }
        
        this.desiredDirection = {x: x, y: y};
    }

    steer(steerStr) {
        
        this.fwd = {
            x: utils.lerp(this.fwd.x, this.desiredDirection.x, steerStr),
            y: utils.lerp(this.fwd.y, this.desiredDirection.y, steerStr)
        }
        
    }

    resetDesired() {
        this.desiredDirection = this.fwd;
    }

    reflectX() {
        this.fwd.x *= -1;
    }

    reflectY() {
        this.fwd.y *= -1;
    }

}

class herdAgent extends agent {
    constructor(app, x = 0, y = 0) {
        super(app.loader.resources["./assets/img/Herder/herdAgent.png"].texture, x, y, .03, 75);
        this.avoidanceDist = 50;
        this.foodSeekDistance = 150;
        this.hunterFleeDistance = 200;

    }

}

class hunterAgent extends agent {
    constructor(app, x = 0, y = 0, speed = 60) {
        super(app.loader.resources["./assets/img/Herder/hunterAgent.png"].texture, x, y, .05, speed);

        this.huntDistance = 300;
        
        this.eatenAgents = 0;
        this.cloneThreshold = 5;
        this.avoidanceDist = 75;
    }


}



class food extends PIXI.Sprite {
    constructor(app, x = 0, y = 0) {
        super(app.loader.resources["./assets/img/Herder/food.png"].texture);
        this.anchor.set(.5, .5);
        this.scale.set(.01);
        this.x = x;
        this.y = y;

        this.isEaten = false;
    }
}

module.exports = {
    herdAgent, 
    hunterAgent,
    food
}