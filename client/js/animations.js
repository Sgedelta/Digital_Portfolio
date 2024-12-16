/* eslint-disable linebreak-style */
/* eslint-disable no-undef */


//define an array of dice elements and their animationData
const dieElements = [
    {
        element: document.querySelector("#S"),
        animationData: {
            transform: 'matrix(0.917814,0,0,0.917814,-224.843,253.089)',
        }
    },
    {
        element: document.querySelector("#G"),
        animationData: {
            transform: 'matrix(0.926224,0,0,0.926224,-167.038,74.3847)',
        }
    },
    {
        element: document.querySelector("#E"),
        animationData: {
            transform: 'matrix(0.939177,0,0,0.968939,-114.394,233.49)',
        }        
    },
    {
        element: document.querySelector("#Lettering"),
        animationData: {
            transform: 'matrix(0.693363,0,0,0.693363,150.43,222.234)',
        }        
    },
    {
        element: document.querySelector("#CenterTri path"),
        isTimeline: true,
        animationData: 
        [
            {
                strokeWidth: 20,
                duration: 1
            },

        ],
        timelineStart: 1.5

    },
    {
        element: document.querySelector("#UpperLeft path"),
        animationData: {
            attr: { d: "M104.701,287.546L267.095,376.901" }
        }
    },
    {
        element: document.querySelector("#UpperRight path"),
        animationData: {
            attr: {d: "M812.453,377.149L976.601,286.278"}
        }
    },
    {
        element: document.querySelector("#UpperCenterLeft path"),
        animationData: {
            attr: {d: "M267.547,377.149L540.651,44.858"}
        }
    },
    {
        element: document.querySelector("#UpperCenterRight path"),
        animationData: {
            attr: {d: "M540.71,44.93L812.433,377.124"}
        }
    },
    {
        element: document.querySelector("#MidLeft path"),
        animationData: {
            attr: {d: "M267.664,369.025L96.382,793.074"}
        }
    },
    {
        element: document.querySelector("#MidRight path"),
        animationData: {
            attr: {d: "M979.893,793.074L813.338,372.346"}
        }
    },
    {
        element: document.querySelector("#LowerLeft path"),
        animationData: {
            attr: {d: "M104.701,789.218L540.908,847.152"}
        }
    },
    {
        element: document.querySelector("#LowerCenter path"),
        animationData: {
            attr: {d: "M538.789,849.052L538.138,1050.62"}
        }
    },
    {
        element: document.querySelector("#LowerRight path"),
        animationData: {
            attr: {d: "M975.888,752.44L539.905,812.026"}
        }
    },

];

//set some animation constants, such as ease and duration:
const animDefaults = {
    duration: 2.5,
    ease: "power3.inOut",
};


//logo default anims
const defaultElements = [
    {
        element: document.querySelector("#S"),
        animationData: {
            transform: 'matrix(0.896659,0,0,0.896659,-48.6631,11.4387)',
            opacity: 1,
        }
    },
    {
        element: document.querySelector("#G"),
        animationData: {
            transform: 'matrix(0.896659,0,0,0.896659,-196.948,239.44)',
            opacity: 1,
        }
    },
    {
        element: document.querySelector("#E"),
        animationData: {
            transform: 'matrix(0.896659,0,0,0.896659,-333.532,461.916)',
            opacity: 1,
        }
    },
    {
        element: document.querySelector("#Lettering"),
        animationData: {
            transform: 'matrix(0.870393,0,0,0.870393,108.487,18.5022)',
        }        
    },
    {
        element: document.querySelector("#CenterTri path"),
        isTimeline: true,
        animationData: 
        [
            {
                strokeWidth: 0,
                duration: 1.5
            },

        ],
        timelineStart: 1

    },
    {
        element: document.querySelector("#UpperLeft path"),
        animationData: {
            attr: { d: "M104.701,287.546L101.024,460.119" }
        }
    },
    {
        element: document.querySelector("#UpperRight path"),
        animationData: {
            attr: {d: "M981.69,477.845L976.601,286.278"}
        }
    },
    {
        element: document.querySelector("#UpperCenterLeft path"),
        animationData: {
            attr: {d: "M137.573,265.228L537.876,32.239"}
        }
    },
    {
        element: document.querySelector("#UpperCenterRight path"),
        animationData: {
            attr: {d: "M541.075,31.326L916.63,248.137"}
        }
    },
    {
        element: document.querySelector("#MidLeft path"),
        animationData: {
            attr: {d: "M99.419,332.813L96.382,793.074"}
        }
    },
    {
        element: document.querySelector("#MidRight path"),
        animationData: {
            attr: {d: "M979.893,793.074L977.613,340.454"}
        }
    },
    {
        element: document.querySelector("#LowerLeft path"),
        animationData: {
            attr: {d: "M104.701,789.218L514.046,1033.49"}
        }
    },
    {
        element: document.querySelector("#LowerCenter path"),
        animationData: {
            attr: {d: "M538.138,1050.62L538.138,1050.62Z"}
        }
    },
    {
        element: document.querySelector("#LowerRight path"),
        animationData: {
            attr: {d: "M964.73,557.566L539.905,812.026"}
        }
    },
    {
        element: document.querySelector("#partOne"),
        animationData: {
            attr: {d: "M976.231,472.893L970.934,435.981L974.247,385.304L989.855,457.38L988.561,499.312L991.493,521.463L991.869,556.775L988.421,574.178L979.752,634.907L974.423,685.452L970.414,596.333L977.071,535.378L976.231,472.893Z"}
        }
    },
    {
        element: document.querySelector("#partTwo"),
        animationData: {
            attr: {d: "M86.657,769.031L89.128,704.997L93.454,600.076L96.8,529.387L101.998,449.237L104.813,365.703L111.275,365.206L108.442,449.464L104.406,531.434L101.931,602.961L98.253,707.68L93.955,767.947L86.657,769.031Z"}
        }
    },
    {
        element: document.querySelector("#partThree"),
        animationData: {
            attr: {d: "M111.958,493.347C100.355,500.261 104.27,504.017 104.218,506.094C104.127,509.72 104.775,512.68 104.908,515.857C105.052,519.295 108.36,519.391 107.192,522.546C105.24,527.821 103.613,530.48 101.949,532.231C100.478,533.78 102.507,533.099 98.572,540C100.958,546.403 100.797,541.162 101.64,554.242C102.499,567.564 108.625,560.333 107.35,570.146C106.332,577.977 101.464,576.571 102.94,582.74C103.997,587.156 105.194,588.227 106.112,594.597C107.57,604.716 108.588,601.047 113.184,608.614L109.552,677.189L96.399,676.444C82.903,668.699 92.712,664.86 94.824,652.054C96.861,639.706 97.122,641.119 104.824,630.746C107.525,627.108 101.976,626.533 101.404,616.867C100.758,605.945 98.125,603.078 96.456,596.267C94.089,586.608 94.016,585.088 91.669,576.6C91.692,562.375 93.627,562.234 94.13,534.452C94.443,517.192 92.521,495.748 90.783,487.696C99.995,482.885 99.387,476.047 101.85,471.714C103.182,469.37 100.325,463.496 99.153,457.466C98.339,453.28 90.717,448.377 91.991,441.623C94.485,428.397 95.209,426.755 91.706,426.177C90.333,425.951 78.351,426.226 111.54,407.367L111.958,493.347Z"}
        }
    },


];


//language elements
const langHTMLElements = [
    {
        element: document.querySelector("#S"),
        animationData: {
            opacity: 0,
        }
    },
    {
        element: document.querySelector("#G"),
        animationData: {
            opacity: 0,
        }
    },
    {
        element: document.querySelector("#E"),
        animationData: {
            opacity: 0,
        }        
    },
    {
        element: document.querySelector("#partOne"),
        animationData: {
            attr: {d: "M696.186,472.998L696.677,429.991L696.11,385.304L821.339,454.557L900.094,498.441L900.562,518.058L900.562,557.858L900.094,572.417L803.06,626.372L696.286,685.452L696.289,596.894L805.338,535.378L696.186,472.998Z"}
        },
    },
    {
        element: document.querySelector("#partTwo"),
        animationData: {
            attr: {d: "M423.021,766.629L451.104,699.623L495.765,590.563L528.035,512.399L568.4,413.654L594.627,349.086L653.648,349.086L613.097,448.419L587.449,512.108L552.292,596.72L510.081,699.348L482.127,766.629L423.021,766.629Z"},
        },
    },
    {
        element: document.querySelector("#partThree"),
        animationData: {
            attr: {d: "M383.89,473.984C372.287,480.899 371.76,480.619 367.719,483.088C358.03,489.007 358.145,488.798 343.198,497.047C324.409,507.416 324.541,507.409 314.17,513.154C303.404,519.119 303.302,519.104 294.58,523.923C283.107,530.262 299.865,521.108 274.123,535.378C278.827,538.392 278.925,538.007 290.262,544.586C305.543,553.453 308.081,555.045 319.05,561.111C337.286,571.194 337.216,570.95 348.246,577.359C360.258,584.338 360.658,584.74 366.634,587.992C375.601,592.872 375.558,592.913 383.89,597.609L383.89,685.452L363.541,674.223C350.046,666.479 346.519,664.78 331.283,656.229C320.369,650.104 317.285,648.221 299.493,638.449C276.36,625.743 274.952,624.671 249.12,610.554C227.443,598.707 225.596,597.426 213.644,590.947C194.003,580.3 189.299,577.718 179.906,571.978C179.929,557.753 179.906,557.702 179.906,529.916C179.906,502.129 180.092,519.513 179.906,498.453C242.191,463.946 179.967,498.73 242.342,463.856C282.029,442.362 242.472,463.897 281.898,442.399C310.71,426.689 281.93,442.423 310.343,426.853C350.096,404.07 309.841,427.058 350.505,404.048C383.983,385.105 350.7,404.163 383.89,385.304L383.89,473.984Z"}
        },
    },
];

const langCppElements = [
    {
        element: document.querySelector("#S"),
        animationData: {
            opacity: 0,
        }
    },
    {
        element: document.querySelector("#G"),
        animationData: {
            opacity: 0,
        }
    },
    {
        element: document.querySelector("#E"),
        animationData: {
            opacity: 0,
        }        
    },
    {
        element: document.querySelector("#partOne"),
        animationData: {
            attr: {d:"M716.79,518.13L786.501,518.13L786.501,448.419L830.241,448.419L830.241,518.13L899.611,518.13L899.611,561.87L830.241,561.87L830.241,631.581L786.501,631.581L786.501,561.87L716.79,561.87L716.79,518.13Z" },
        },
    },
    {
        element: document.querySelector("#partTwo"),
        animationData: {
            attr: {d: "M493.346,518.13L563.057,518.13L563.057,448.419L606.797,448.419L606.797,518.13L676.166,518.13L676.166,561.87L606.797,561.87L606.797,631.581L563.057,631.581L563.057,561.87L493.346,561.87L493.346,518.13Z"},
        },
    },
    {
        element: document.querySelector("#partThree"),
        animationData: {
            attr: {d: "M475.646,480.116C453.928,453.607 427.1,440.353 395.161,440.353C381.109,440.353 368.094,442.908 356.117,448.018C344.14,453.128 333.84,460.075 325.217,468.858C316.594,477.641 309.807,488.101 304.856,500.237C299.906,512.374 297.431,525.468 297.431,539.521C297.431,553.893 299.906,567.147 304.856,579.284C309.807,591.42 316.674,601.96 325.456,610.903C334.239,619.845 344.54,626.872 356.357,631.982C368.174,637.092 380.949,639.647 394.682,639.647C424.704,639.647 451.692,626.872 475.646,601.321L475.646,712.466L466.064,715.819C451.692,720.93 438.278,724.682 425.822,727.078C413.366,729.473 401.07,730.671 388.934,730.671C364.022,730.671 340.148,725.96 317.312,716.538C294.476,707.116 274.355,693.862 256.949,676.775C239.543,659.688 225.57,639.407 215.03,615.933C204.491,592.458 199.221,566.828 199.221,539.042C199.221,511.256 204.411,485.785 214.791,462.63C225.171,439.475 239.064,419.513 256.47,402.746C273.876,385.978 294.077,372.884 317.073,363.462C340.068,354.04 364.181,349.329 389.413,349.329C403.785,349.329 417.917,350.846 431.81,353.881C445.704,356.915 460.315,361.626 475.646,368.013L475.646,480.116Z"},
        },
    },
];

const langCSElements = [
    {
        element: document.querySelector("#S"),
        animationData: {
            opacity: 0,
        }
    },
    {
        element: document.querySelector("#G"),
        animationData: {
            opacity: 0,
        }
    },
    {
        element: document.querySelector("#E"),
        animationData: {
            opacity: 0,
        }        
    },
    {
        element: document.querySelector("#partOne"),
        animationData: {
            attr: {d: "M540,566.072L715.61,566.072L715.61,390.275L763.284,390.275L763.284,566.072L838.892,566.072L838.892,613.745L763.284,613.745L763.284,689.725L715.61,689.725L715.61,613.745L540,613.745L540,566.072Z"},
        },
    },
    {
        element: document.querySelector("#partTwo"),
        animationData: {
            attr: {d: "M540,466.255L615.98,466.255L615.98,390.275L663.654,390.275L663.654,466.255L838.892,466.255L838.892,513.928L663.654,513.928L663.654,689.725L615.98,689.725L615.98,513.928L540,513.928L540,466.255Z"},
        },
    },
    {
        element: document.querySelector("#partThree"),
        animationData: {
            attr: {d: "M475.646,480.116C453.928,453.607 427.1,440.353 395.161,440.353C381.109,440.353 368.094,442.908 356.117,448.018C344.14,453.128 333.84,460.075 325.217,468.858C316.594,477.641 309.807,488.101 304.856,500.237C299.906,512.374 297.431,525.468 297.431,539.521C297.431,553.893 299.906,567.147 304.856,579.284C309.807,591.42 316.674,601.96 325.456,610.903C334.239,619.845 344.54,626.872 356.357,631.982C368.174,637.092 380.949,639.647 394.682,639.647C424.704,639.647 451.692,626.872 475.646,601.321L475.646,712.466L466.064,715.819C451.692,720.93 438.278,724.682 425.822,727.078C413.366,729.473 401.07,730.671 388.934,730.671C364.022,730.671 340.148,725.96 317.312,716.538C294.476,707.116 274.355,693.862 256.949,676.775C239.543,659.688 225.57,639.407 215.03,615.933C204.491,592.458 199.221,566.828 199.221,539.042C199.221,511.256 204.411,485.785 214.791,462.63C225.171,439.475 239.064,419.513 256.47,402.746C273.876,385.978 294.077,372.884 317.073,363.462C340.068,354.04 364.181,349.329 389.413,349.329C403.785,349.329 417.917,350.846 431.81,353.881C445.704,356.915 460.315,361.626 475.646,368.013L475.646,480.116Z"},
        },
    },
];

const addDefaults = (animArray, defaults) => {
//set them for all animations where they don't have existing data
animArray.forEach(animatedObj => {
    if(!animatedObj.isTimeline) {
        for(const property in defaults) {
            if(!animatedObj.animationData[property]) {
                animatedObj.animationData[property] = defaults[property];
            }
        }
    } else {
        for(const property in defaults) {
            animatedObj.animationData.forEach(data => {
                if(!data[property]) {
                    data[property] = defaults[property];
                }
            });
            
        }
        

    }



});
}



const setAnims = (animArray) => {
    //set all of the animations (as 'finished', reversed is true)
    animArray.forEach(element => {
        if(element.isTimeline !== true) {
            element.anim = gsap.to(
                element.element, element.animationData
            ).reversed(true); 
        } 
        else {  
            const elementTimeline = gsap.timeline();
            
            element.animationData.forEach(data => {
                elementTimeline.to(element.element, data, element.timelineStart).reversed(true);
            });
            
            element.anim = elementTimeline;
        }
        
    });
};


const playAnimation = (animationArray, importedDefaults = animDefaults) => {
    addDefaults(animationArray, importedDefaults);
    setAnims(animationArray);
    animationArray.forEach(element => {
        element.anim.reversed(!element.anim.reversed());
    });
};

let animationCounter = 0;
const toggleNextAnim = () => {
    switch(animationCounter) {
        case 0:
            playAnimation(langHTMLElements);
        break;

        case 1:
            playAnimation(langCppElements);
        break;
        
        case 2:
            playAnimation(langCSElements);
        break;

        case 3:
            playAnimation(defaultElements);
        break;
        
        case 4:
            playAnimation(dieElements);
        break;


        default:
            animationCounter = -1;
            playAnimation(defaultElements);
        break;
    }
    animationCounter++;

};

let playAnims = false;
let waiting = false;
const animationHandler = async () => {

    while(playAnims) {

        toggleNextAnim();
        //wait for some time
        waiting = true;
        await new Promise((resolve) => setTimeout(resolve, 4000)); 
        waiting = false;
    }
}





const animationSetup = () => {

    gsap.set('g', {
        autoAlpha: 1, // changes visibility AND opacity of an element -
        // default to hidden to prevent flashes of unwanted content (this shows once the script loads)
    });
    
    // Hide the Dice elements at start
    gsap.set('#Dice-Inner', {
        autoAlpha: 1,
    });
    
    addDefaults(dieElements, animDefaults);
    setAnims(dieElements);
    
    document.querySelector("#logo").addEventListener('mouseenter', () => {
        playAnims = true;
        if(!waiting) {
            animationHandler();
        }   
    });

    document.querySelector("#logo").addEventListener('mouseleave', () => {
        playAnims = false;
        playAnimation(defaultElements);
    });
}
module.exports.animationSetup = animationSetup;



