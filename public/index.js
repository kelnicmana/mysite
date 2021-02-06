const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const navBorder = document.querySelector('#navBorder');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    
    else {
            menu.classList.add('hidden');
    }
    if (navBorder.classList.contains('border-b')) {
        navBorder.classList.remove('border-b');
    }
    
    else {
            navBorder.classList.add('border-b');
    }
})