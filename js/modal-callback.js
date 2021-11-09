//обратный звонок

var modal_callback_button_open1 = document.querySelector('.modal-callback__button-open1');
var modal_callback_button_open2 = document.querySelector('.modal-callback__button-open2');
var modal_callback_button_close = document.querySelector('.modal-callback__button-close');
var modal_callback_blur_close = document.querySelector('.modal-callback__blur');
var modal_callback = document.querySelector('.modal-callback');
var modal_callback_animation = document.querySelector('.modal-callback > :first-child');

modal_callback_button_open1.addEventListener('click', function () {
    modal_callback.classList.remove('modal-callback__close')
});
modal_callback_button_open2.addEventListener('click', function () {
    modal_callback.classList.remove('modal-callback__close')
});
modal_callback_button_close.addEventListener('click', function() {
    modal_callback.classList.add('modal-callback__close')
});
modal_callback_blur_close.addEventListener('click', function() {
    modal_callback.classList.add('modal-callback__close')
});


function modal_callback_open_slow() {
    modal_callback.classList.remove('modal-callback__close');
    function modal_callback_open() {
    modal_callback_animation.classList.add('modal-callback__position')
    }
    setTimeout(modal_callback_open, 50);
}

modal_callback_button_open1.addEventListener('click', modal_callback_open_slow);
modal_callback_button_open2.addEventListener('click', modal_callback_open_slow);


modal_callback_button_close.addEventListener('click', function() {
    modal_callback.classList.add('modal-callback__close')
    modal_callback_animation.classList.remove('modal-callback__position')
});
modal_callback_blur_close.addEventListener('click', function() {
    modal_callback.classList.add('modal-callback__close')
    modal_callback_animation.classList.remove('modal-callback__position')
});