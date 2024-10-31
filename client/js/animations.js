/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
gsap.set('g', {
    autoAlpha: 1, // changes visibility AND opacity of an element -
    // default to hidden to prevent flashes of unwanted content (this shows once the script loads)
});

// Hide the Dice elements at start
gsap.set('#Dice-Inner', {
    autoAlpha: 1,
});




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

]

//set some animation constants, such as ease and duration:
const dieAnimDuration = 2.5;
const dieAnimEase = "power3.inOut";



//set them for all animations where they don't have existing data
dieElements.forEach(element => {
    if(!element.isTimeline) {
        if(!element.animationData.duration) {
            element.animationData.duration = dieAnimDuration;
        }
        if(!element.animationData.ease) {
            element.animationData.ease = dieAnimEase;
        }
    } else {
        element.animationData.forEach(data => {
            if(!data.duration) {
                data.duration = dieAnimDuration;
            }
            if(!data.ease) {
                data.ease = dieAnimEase;
            }
        });

    }



});




//set all of the animations (as 'finished', reversed is true)
dieElements.forEach(element => {
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







const DieAnimation = () => {
    dieElements.forEach(element => {
        element.anim.reversed(!element.anim.reversed());
    });    
};

dieElements[1].element.addEventListener('click', DieAnimation);





