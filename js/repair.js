var button_repair = document.querySelector('.repair__button');
var height_repair = document.querySelector('.repair')
button_repair.addEventListener('click', function () {
     if (document.querySelector(".repair__button").classList.contains("repair__cards-close")){
         button_repair.classList.remove('repair__cards-close');
         button_repair.classList.add('.repair__cards-open');
         height_repair.classList.add('repair__height');
         document.getElementById("repair__text").innerHTML = "Скрыть";
     } else {
         button_repair.classList.remove('.repair__cards-open');
         height_repair.classList.remove('repair__height');
         button_repair.classList.add('repair__cards-close');
         document.getElementById("repair__text").innerHTML = "Показать всё";
     }
   });