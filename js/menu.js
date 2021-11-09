//меню
var button_menu_open = document.querySelector('.navigation-panel__button_open');
var button_menu_close = document.querySelector('.sidebar__button_close');
var menu = document.querySelector('.body');
var blur = document.querySelector('.sidebar__blur');
var animation = document.querySelector('.sidebar');


function meny_open_slow() {
    function meny() {
         animation.classList.add('sidebar_position_right');
         blur.classList.add('sidebar__blur_white')
    };

    menu.classList.remove('sidebar__close');
    animation.classList.add('sidebar_position');
    blur.classList.add('sidebar__blur_transparent');
    setTimeout(meny, 50);
    };
button_menu_open.addEventListener('click', meny_open_slow );
    

button_menu_close.addEventListener('click', function () {
    menu.classList.add('sidebar__close');
    animation.classList.remove('sidebar_position');
    animation.classList.remove('sidebar_position_right');
    blur.classList.remove('sidebar__blur_white')
    blur.classList.remove('sidebar__blur_transparent')
    
    });
blur.addEventListener('click', function () {
     menu.classList.add('sidebar__close');
     animation.classList.remove('sidebar_position');
     animation.classList.remove('sidebar_position_right');
     blur.classList.remove('sidebar__blur_white')
     blur.classList.remove('sidebar__blur_transparent')
    });