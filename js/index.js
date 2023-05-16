const $ = selector => document.querySelector(selector);
const menu = $('.mobile-menu');
const btnMenu = $('.mobile-menu-btn');

btnMenu.addEventListener("click", (e) =>{
    e.preventDefault();
    menu.classList.toggle('hidden')
})
