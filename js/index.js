page = document.getElementById("page") // the main content element
nav = document.querySelector("nav") // the whole nav element
hamburger = document.querySelector(".hamburger"); // hamburger icon (for mobile)

function closeNav(){ // closes the side navigation (for mobile)
    nav.classList.add("nav-hidden");
    nav.classList.remove("nav-shown");
}
function openNav(){ // opens the side navigation (for mobile)
    nav.classList.remove("nav-hidden");
    nav.classList.add("nav-shown");
}
function toggleHamburger(){ // animating the hamburger
    hamburger.classList.toggle("hamclosed");
}
function toggleNav(){ // function to handle navigation open and close
    toggleHamburger()
    if (nav.classList.contains("nav-hidden")){
        openNav()
    }
    else{
        closeNav()
    }
}

hamburger.addEventListener("click",e=>{//when hamburger menu is clicked
    toggleNav() 
})
page.addEventListener("click",e=>{
    if (nav.classList.contains("nav-shown")){
        closeNav();
        toggleHamburger();
    }
})
//Background Particle dropping animation
function randomizeParticle(particle){
    // randomizes the values of the given particle element according to the screen resolution
    particle.style.bottom = "-5px"
    let randomSecs = Math.floor(Math.random()*20);
    let random_size = Math.floor(Math.random()*20);
    let random_x = Math.floor(Math.random()*window.innerWidth);
    let random_y = Math.floor(Math.random()*600);
    if(randomSecs<5){randomSecs = 5;}
    particle.style.position = "fixed"
    particle.style.animation = `particle-animation ${randomSecs}s 100`
    particle.style.width = `${random_size}px`;
    particle.style.height = `${random_size}px`;
    particle.style.left = `${random_x}px`;
    particle.style.top = `-${random_y}px`;
    return particle
}

total_particles = 50 // total particles elements for animation
for(let i = 0;i<total_particles;i++){
    //creating new html div elements with particle class and adding to the document by randomizing the values
    let new_particle = document.createElement("div")
    new_particle.setAttribute("class","particle")
    document.body.appendChild(randomizeParticle(new_particle));
}


window.addEventListener("resize",e=>{ // updating the particles position with window resize
    particles = document.getElementsByClassName("particle");
    for(let particle of particles){
        randomizeParticle(particle);
    }
})

// Transparency of current page title at the top when document is scrolled.
window.addEventListener("scroll", (event) => {
    let content_title = document.querySelector("h1.content-title");
    if (this.scrollY!=0){ // when the user is a the top (not scrolled)
        content_title.style.backgroundColor = "var(--content-title-bg-opaque)"
    }else{ // when the user scrolls the page
        content_title.style.backgroundColor = "var(--content-title-bg)"
    }
});


// Setting the title of the window according to the current page
curr_page = document.querySelector(".current-page")
document.title = curr_page.textContent + " - Manoj Neupane"