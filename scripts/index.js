//imports
import { initialCards } from "./cards.js";
//botton editar perfil
const popcontainer = document.querySelector(".popup_opened");

const container= document.querySelector(".main");

const editprofile = container.querySelector(".main__button_edit");
console.log(editprofile);


editprofile.addEventListener('click', ()=>{
  popcontainer.classList.remove('popup_opened')
});

//boton cerrar pupup

const closepopup = popcontainer.querySelector('.popup__close')
console.log(closepopup);

closepopup.addEventListener('click', ()=>{
  event.preventDefault();
  popcontainer.classList.add('popup_opened')
});

//poner el contenido del perfil en los campos del popup por defecto

const profilename = container.querySelector('.main__paragraph_name');

const profilejob = container.querySelector('.main__paragraph_job');

const popupname = popcontainer.querySelector('.popup__nombre');

const popupjob = popcontainer.querySelector('.popup__about');

popupjob.placeholder = profilejob.textContent;
popupname.placeholder = profilename.textContent;

//Cambiar el contenido de la secion perfil con los inputs del pupup al guardar

const popupsave = popcontainer.querySelector('.popup__guardar');

popupsave.addEventListener('click', ()=>{
  event.preventDefault();
  profilename.textContent = popupname.value || profilename.textContent;
  profilejob.textContent = popupjob.value || profilejob.textContent;
  popcontainer.classList.add('popup_opened');

});


//toma un array y crea las targetas usando un template


initialCards.forEach(element => {
const cardsContainer = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#card').content;
const card = cardTemplate.querySelector('.gallery__card').cloneNode(true);

card.querySelector('.gallery__card-image').src = element.link;
card.querySelector('.gallery__card-name').textContent = element.name;

cardsContainer.append(card);
console.log(card);



});



