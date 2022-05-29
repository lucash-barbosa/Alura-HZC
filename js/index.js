const botaomenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');
const principal = document.querySelector('.principal')

botaomenu.addEventListener('click', () => {
    menu.classList.add('menu-lateral--ativo');

    principal.addEventListener('click', () => {
        menu.classList.remove('menu-lateral--ativo');
    })
})
