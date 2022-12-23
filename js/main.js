"use strict";

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

//burger menu
btn.addEventListener("click", function () {
    nav.classList.toggle('menu-open');
});

const news = document.querySelectorAll('.menu');

for (let elem of news){
    elem.addEventListener('click', function(){
        nav.classList.toggle('menu-open');
    });
}

