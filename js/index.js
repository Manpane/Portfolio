
nav = document.querySelector("nav")
hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",e=>{
    hamburger.classList.toggle("hamclosed");
    if (nav.classList.contains("nav-hidden")){
        nav.classList.remove("nav-hidden");
        nav.classList.add("nav-shown");
    }
    else{
        nav.classList.add("nav-hidden");
        nav.classList.remove("nav-shown");
    }
})