var popuplenovo = document.querySelector('.brend-types__desktop_wrapper-item-lenovo');
var popupSamsung = document.querySelector('.brend-types__desktop_wrapper-item-samsung');
var popupApple = document.querySelector('.brend-types__desktop_wrapper-apple');
var popupAcer = document.querySelector('.brend-types__desktop_wrapper-item-acer');
var popupSony = document.querySelector('.brend-types__desktop_wrapper-item-sony');

var openPopupButton = document.querySelector('.brend-type-btn');
var closePopupButton = document.querySelector('.brend-type-btn_close');


openPopupButton.addEventListener('click', function () {
  popuplenovo.classList.add("modal--show");      /*открываем лого*/
  popupSamsung.classList.add("modal--show2");    /*открываем лого*/
  popupApple.classList.add("modal--show3");      /*открываем лого*/
  openPopupButton.classList.add("modal--show4"); /*скрываем кнопку "Показать"*/
  closePopupButton.classList.add("modal--show5"); /*Открываем кнопку "Скрыть"*/ 
 });


closePopupButton.addEventListener('click', function () {
  popuplenovo.classList.remove("modal--show");      /*открываем лого*/
  popupSamsung.classList.remove("modal--show2");    /*открываем лого*/
  popupApple.classList.remove("modal--show3");      /*открываем лого*/
  openPopupButton.classList.remove("modal--show4"); /*скрываем кнопку "Показать"*/
  closePopupButton.classList.remove("modal--show5"); /*Открываем кнопку "Скрыть"*/ 	
 });


if (window.matchMedia("(max-width: 1000px)").matches) {
 openPopupButton.addEventListener('click', function () {	
  popupAcer.classList.add("modal--show6");
  popupSony.classList.add("modal--show7");
  });
  closePopupButton.addEventListener('click', function () {	
  popupAcer.classList.remove("modal--show6");
  popupSony.classList.remove("modal--show7");
  });
} else {

};





