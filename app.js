let isTransparent = true;
const nav = document.querySelector("nav");
const span = document.querySelector("span");

window.addEventListener("scroll",event=>{
    if(window.pageYOffset>70 && isTransparent){
        nav.classList.add("_fixed");
        span.classList.add(".logo");
        isTransparent = false;
    }
    if(window.pageYOffset<=70 && !isTransparent){
        nav.classList.remove("_fixed");
        span.classList.remove(".logo");
        listTransparent = true;
    }
});