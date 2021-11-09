//модальное окно обратной связи
    var modal_feedback_button_open1 = document.querySelector('.modal-feedback__button-open1');
    var modal_feedback_button_open2 = document.querySelector('.modal-feedback__button-open2');
    var modal_feedback_button_open3 = document.querySelector('.modal-feedback__button-open3');
    var modal_feedback_button_close = document.querySelector('.modal-feedback__button-close');
    var modal_feedback_blur_close = document.querySelector('.modal-feedback__blur');
    var modal_feedback = document.querySelector('.modal-feedback');
    var modal_feedback_animation = document.querySelector('.modal-feedback > :first-child');

    function modal_feedback_open_slow() {
        modal_feedback.classList.remove('modal-feedback__close');
        function modal_feedback_open() {
        modal_feedback_animation.classList.add('modal-feedback__position')
        }
        setTimeout(modal_feedback_open, 50);
    }

    modal_feedback_button_open1.addEventListener('click', modal_feedback_open_slow);
    modal_feedback_button_open2.addEventListener('click', modal_feedback_open_slow);
    modal_feedback_button_open3.addEventListener('click', modal_feedback_open_slow);
    
    modal_feedback_button_close.addEventListener('click', function() {
        modal_feedback.classList.add('modal-feedback__close')
        modal_feedback_animation.classList.remove('modal-feedback__position')
    });
    modal_feedback_blur_close.addEventListener('click', function() {
        modal_feedback.classList.add('modal-feedback__close')
        modal_feedback_animation.classList.remove('modal-feedback__position')
    });











