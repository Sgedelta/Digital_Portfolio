gsap.set('g', {
    autoAlpha: 1, //changes visibility AND opacity of an element - 
                  // default to hidden to prevent flashes of unwanted content (this shows once the script loads)
});

//Hide the Dice elements at start
gsap.set('#Dice-Inner', {
    autoAlpha: 0,
});
gsap.set('#Lettering2', {
    autoAlpha: 0,
});


//Get an object
const G = document.querySelector("#G");
const centerTri = document.querySelector("#CenterTri path");
//"Run" it's animation - set it to be "completed" from default
G.anim = gsap.to(G, 
    {
        //json object with the information about the animation
        transform:"matrix(0.926224,0,0,0.926224,-167.038,74.3847)",
        duration: 2,
        ease: "power3.inOut",
    }).reversed(true); //set it to it's "end" (if using from, this would be false?)
centerTri.anim = gsap.to(centerTri, {
    strokeWidth: 0,
}).reversed(true)

const DieAnimation = () => {

    G.anim.reversed(!G.anim.reversed());
    centerTri.anim.reversed(!centerTri.anim.reversed());


};

G.addEventListener('click', DieAnimation);