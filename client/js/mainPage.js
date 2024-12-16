const animationLogic = require('./animations.js');
const contactInfoLogic = require('./contactInfo.js');





//get the page option lis and add an onClick that gives them the selected tag and removes it from all the others
const optionsList = document.querySelector("#pageOptions")
const optionsChildren = Array.from(optionsList.children);

const aboutContent = document.querySelector("#aboutContent");
const projectsContent = document.querySelector("#projectsContent");
const skillsContent = document.querySelector("#skillsContent");
const experienceContent = document.querySelector("#experienceContent");
const contactContent = document.querySelector("#contactContent");


const pageOptionClicked = (e) =>{

    //prevent e.target null errors
    if (!e.target) {
        console.log("event target is null!");
        return;
    }    

    //remove class from all optionsChildren
    optionsChildren.forEach(element => {
        element.classList = "";
    });


    aboutContent.classList.add("hidden");
    projectsContent.classList.add("hidden");
    skillsContent.classList.add("hidden");
    experienceContent.classList.add("hidden");
    contactContent.classList.add("hidden");



    switch(e.target.value) {
        case "about":
        default:
            optionsChildren[0].classList = "selected";
            aboutContent.classList.remove("hidden");
            break;
        case "projects":
            optionsChildren[1].classList = "selected";
            projectsContent.classList.remove("hidden");
        break;
        case "skills":
            optionsChildren[2].classList = "selected";
            skillsContent.classList.remove("hidden");
        break;
        case "experience":
            optionsChildren[3].classList = "selected";
            experienceContent.classList.remove("hidden");
        break;
        case "contact":
            optionsChildren[4].classList = "selected";
            contactContent.classList.remove("hidden");
        break;



    }

}

for(let i = 0; i < optionsChildren.length; ++i) {
    optionsChildren[i].addEventListener('click', pageOptionClicked );
}



const navButtonClicked = () => {
    if(optionsList.classList.contains("offset")) {
        optionsList.classList.remove("offset");
    } else {
        optionsList.classList.add("offset");
    }   
}



const init = () => {
    animationLogic.animationSetup();
    contactInfoLogic.contactInfoSetup();
    document.querySelector("#navButton").addEventListener("click", navButtonClicked);
    pageOptionClicked(optionsChildren[0]);

    //show document, which is hidden by default
    document.querySelector("body").style = "";
    document.querySelector("body").classList.add("show");
}

window.onLoad = init();
