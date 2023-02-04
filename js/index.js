nav = document.querySelector("nav")
hamburger = document.querySelector(".hamburger");

function closeNav(){
    nav.classList.add("nav-hidden");
    nav.classList.remove("nav-shown");
}
function openNav(){
    nav.classList.remove("nav-hidden");
    nav.classList.add("nav-shown");
}
function toggleHamburger(){
    hamburger.classList.toggle("hamclosed");
}
function toggleNav(){
    toggleHamburger()
    if (nav.classList.contains("nav-hidden")){
        openNav()
    }
    else{
        closeNav()
    }
}

hamburger.addEventListener("click",e=>{
    toggleNav()
})
page.addEventListener("click",e=>{
    if (nav.classList.contains("nav-shown")){
        closeNav();
        toggleHamburger();
    }
})
page = document.getElementById("page")
function randomizeParticle(particle){
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
total_particles = 50
for(let i = 0;i<total_particles;i++){
    let new_particle = document.createElement("div")
    new_particle.setAttribute("class","particle")
    document.body.appendChild(randomizeParticle(new_particle));
}


window.addEventListener("resize",e=>{
    particles = document.getElementsByClassName("particle");
    for(let particle of particles){
        randomizeParticle(particle);
    }
})

window.addEventListener("scroll", (event) => {
    let content_title = document.querySelector("h1.content-title");
    if (this.scrollY!=0){
        content_title.style.backgroundColor = "var(--content-title-bg-opaque)"
    }else{
        content_title.style.backgroundColor = "var(--content-title-bg)"
    }
});


