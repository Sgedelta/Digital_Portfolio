const animationLogic = require('./animations.js');






//get the page option lis and add an onClick that gives them the selected tag and removes it from all the others
const optionsList = document.querySelector("#pageOptions")
const optionsChildren = Array.from(optionsList.children);

const aboutContent = document.querySelector("#aboutContent");
const projectsContent = document.querySelector("#projectsContent");
const skillsContent = document.querySelector("#skillsContent");
const experienceContent = document.querySelector("#experienceContent");
const contactContent = document.querySelector("#contactContent");


const pageOptionClicked = (e) =>{

    //remove class from all optionsChildren
    optionsChildren.forEach(element => {
        element.classList = "";
    });


    aboutContent.style = "display:none";
    projectsContent.style = "display:none";
    skillsContent.style = "display:none";
    experienceContent.style = "display:none";
    contactContent.style = "display:none";

    if (!e.target) {
        e.target = {};
    }

    switch(e.target.value) {
        case "about":
        default:
            optionsChildren[0].classList = "selected";
            aboutContent.style = "";
            break;
        case "projects":
            optionsChildren[1].classList = "selected";
            projectsContent.style = "";
        break;
        case "skills":
            optionsChildren[2].classList = "selected";
            skillsContent.style = "";
        break;
        case "experience":
            optionsChildren[3].classList = "selected";
            experienceContent.style = "";
        break;
        case "contact":
            optionsChildren[4].classList = "selected";
            contactContent.style = "";
        break;



    }

}

for(let i = 0; i < optionsChildren.length; ++i) {
    optionsChildren[i].addEventListener('click', pageOptionClicked );
}




const init = () => {
    animationLogic.animationSetup();
    pageOptionClicked(optionsChildren[0]);
}

init();
