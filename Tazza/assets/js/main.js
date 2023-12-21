//header scroll
let nav = document.querySelector(".navbar");
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

//nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})