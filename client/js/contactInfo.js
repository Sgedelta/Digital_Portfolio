const lodash = require('lodash');

const emailDisplay = document.querySelector("#emailDisplay");
const phoneDisplay = document.querySelector("#phoneDisplay");
const contactPage = document.querySelector("#contactContent");


const getRandomChars = (len) => {
    // generated this way because I want to be able to customize the characters that are chosen - not just the numbers+hex set
    // doesn't really need to be "secure" because this is just for visuals.
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?#$%&<>*"
    let str = ""

    for(let i = 0; i < len; ++i) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let stopCyclingEmail = {val: true, running: false};
const cycleRandomEmailChars = async () => {

    stopCyclingEmail.running = true;
    
    //setup!
    let delay = 15; //delay in ms
    const currDisplay = lodash.unescape(emailDisplay.textContent);
    let newDisplay = "";
    if(emailDisplay.classList.contains("mouseOver")) {
        const protectedEmail = "SSgPeAaMsPtRoOnT0E4C@TgImOaNiSlP.AcMoPm0";
        //construct the real email out of a spam protected one
        const doubleLen = protectedEmail.length;
        for(let i = 0; i < doubleLen; i+= 2) {
            newDisplay = newDisplay.concat(protectedEmail.charAt(i));
        }
        delay = 30;
        stopCyclingEmail.val = false; //stop future cycles
    } else {
        newDisplay = getRandomChars(10).concat("@").concat(getRandomChars(5)).concat(".com"); //generates a new random junk email.
    }

    let visited = [];
    for(let len = 0; len < newDisplay.length; ++len) {
        visited[len] = len;
    }

    //email is a constant length, so just loop through replacing at random positions
    while(visited.length > 0) {
        //get a random index of visited, then remove it from visited.
        const randomIndex = Math.floor(Math.random() * visited.length);
        const randomNumber = visited[randomIndex];
        visited.splice(randomIndex, 1);
        emailDisplay.textContent = 
            lodash.unescape(emailDisplay.textContent).substring(0, randomNumber)
            .concat(newDisplay.charAt(randomNumber))
            .concat(lodash.unescape(emailDisplay.textContent).substring(randomNumber+1));

        //handle spam protection

        await sleep(delay);
        delay += Math.floor(Math.random() * 5) * Math.random() < 0.5 ? -1 : 1;


    }

    stopCyclingEmail.running = false;

}



const repeatFunctionUntilFalse = async (flag, fn) => {
    while(flag.val) {
        if(flag.running) {
            //there's another instance, stop this one.
            return;
        }
        await fn();
    }
}


const mouseOverDetect = (e) => {
    e.target.classList.add("mouseOver");

}

const mouseOutDetect = (e) => {
    e.target.classList.remove("mouseOver");
}





const contactInfoSetup = () => {

    //set up mutation observer for if the page is being shown
    const pageObserver = new MutationObserver((mutationList) => {
        for(const item of mutationList) {
            if(item.attributeName === "class") {
                const classList = contactPage.classList;
                if(!classList.contains("hidden")) {
                    stopCyclingEmail.val = true;
                    repeatFunctionUntilFalse(stopCyclingEmail, cycleRandomEmailChars);
                } 
                else {
                    stopCyclingEmail.val = false;
                }
            }
        }
    });

    pageObserver.observe(contactPage, { attributes: true, childList: false, subtree: false });

    //listen to if the email is being moused over - if it is, we can shift it to showing our real email.
    emailDisplay.addEventListener('mouseover', mouseOverDetect);
    emailDisplay.addEventListener('mouseout', (e) => {
        mouseOutDetect(e);
        stopCyclingEmail.val = true;
        repeatFunctionUntilFalse(stopCyclingEmail, cycleRandomEmailChars);
    });
    emailDisplay.addEventListener('touchstart', async (e) => {
        mouseOverDetect(e);
        sleep(4000);
        e.target.classList.remove("mouseOver");
        stopCyclingEmail.val = true;
        repeatFunctionUntilFalse(stopCyclingEmail, cycleRandomEmailChars);;
    });

};
module.exports.contactInfoSetup = contactInfoSetup;