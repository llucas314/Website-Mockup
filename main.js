const hamburger = document.querySelector('.menu-wrapper');
const menu = document.querySelector('div.menu');
hamburger.addEventListener('click', function(){
    if (menu.style.visibility === "hidden"){
    menu.style.visibility = "visible"
    } else 
    menu.style.visibility = "hidden"
})