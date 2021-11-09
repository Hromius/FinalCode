var button = document.querySelector('.brands__button');
var height = document.querySelector('.brands')
button.addEventListener('click', function () {
    if (document.querySelector(".brands__button").classList.contains("brands__button_close")){
        button.classList.remove('brands__button_close');
        button.classList.add('brands__button_open');
        height.classList.add('brands__height');
        document.getElementById("text").innerHTML = "Скрыть";
    } else {
        button.classList.remove('brands__button_open');
        height.classList.remove('brands__height');
        button.classList.add('brands__button_close');
        document.getElementById("text").innerHTML = "Показать всё";
    }

  });