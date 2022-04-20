const btnMenu = document.querySelector('.top__header .navigation__mobile button');
const btnGetCoffe = document.querySelectorAll('.button__getCoffe');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('ativo');
    btnMenu.nextElementSibling.classList.toggle('ativo');
    document.body.classList.toggle('hidden');
});

btnGetCoffe.forEach((button) => {
    button.addEventListener('click', () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=5598985026604&text=Fala%20Lu%C3%ADs%2C%20beleza%20cara%3F';
    });
});
