const modal = document.querySelector('.modal');
const btnClose = document.querySelector('#btn-close');

const button = document.querySelectorAll('#button')

button.forEach(btn => {
    btn.addEventListener('click', () =>{
        modal.classList.add('visible');
        modal.classList.remove('hidden');  
    });
});

btnClose.addEventListener('click', () =>{
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});

//

const hideNavbarMedia = window.matchMedia("(max-width: 600px)")
const pageTitle = document.querySelector("header .page-title");
const header = document.querySelector("header");
const nav = document.querySelector("header nav");

hideNavbarMedia.addEventListener("change", (ev) => {
    header.classList.toggle("active", ev.matches);
    
    if (!ev.matches) {
        nav.classList.remove("unfold");
    }
});

pageTitle.addEventListener("click", () => {
    if (header.classList.contains("active")) {
        nav.classList.toggle("unfold");
    }
});

header.classList.toggle("active", hideNavbarMedia.matches);