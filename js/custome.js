var menu = document.getElementById("nav-area");
var fas = document.querySelector(".fa-bars");
var hambarger = document.getElementById("hambarger");

hambarger.addEventListener("click",function(){
    menu.classList.toggle("open");
    fas.classList.toggle("fa-times");
})