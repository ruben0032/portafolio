const $ = selector => document.querySelector(selector);
const menu = $('.mobile-menu');
const btnMenu = $('.mobile-menu-btn');
const url = 'https://urgames-score.onrender.com/'

const preloadProyect = async (urlPage) => {
    try {
        await fetch(urlPage,
        {
          method:'GET',
          headers: { 'Content-Type': 'application/json' }
        })
    } catch (err) {
        console.log(`Error: ${err}`);
    }
};

btnMenu.addEventListener("click", (e) =>{
    e.preventDefault();
    menu.classList.toggle('hidden')
});

window.addEventListener('load', async () => {
    await preloadProyect(url);
    console.log('pagina lista');
});
