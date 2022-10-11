const hamburgerMenu = document.querySelector('.hamburger__link');

const headerNav = document.querySelector('.header__nav');
const headerActiveNav = document.querySelector('.header__active-nav');


const close = document.querySelector('.close');

hamburgerMenu.addEventListener('click',function (){
    headerNav.style.opacity = '0';
    headerActiveNav.style.display = 'block';
})



close.addEventListener('click',function (){
    headerNav.style.opacity = '1';
    headerActiveNav.style.display = 'none';
    console.log('I LOVE YOU');

    
})