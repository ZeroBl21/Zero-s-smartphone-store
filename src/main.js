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

