//imports
import { initialCards, card } from "./cards.js";
import  {config, FormValidator } from "./validate.js";
import {closePopup, ProfileEdit, OpenImgPop, closeImgPop, saveImg, closefromdiv} from "./utils.js"
//botton editar perfil
const popcontainer = document.querySelector("#popupProfile");
const container= document.querySelector(".main");
const editprofile = container.querySelector(".main__button_edit");
editprofile.addEventListener('click', ()=>{
  popcontainer.classList.remove('popup_opened')
});

//boton cerrar popup
closePopup();



//poner el contenido del perfil en los campos del popup por defecto

const profilename = container.querySelector('.main__paragraph_name');

const profilejob = container.querySelector('.main__paragraph_job');

const popupname = popcontainer.querySelector('.popup__nombre');

const popupjob = popcontainer.querySelector('.popup__about');

popupjob.placeholder = profilejob.textContent;
popupname.placeholder = profilename.textContent;

//Cambiar el contenido de la secion perfil con los inputs del pupup al guardar


ProfileEdit(container);

//toma un array y crea las targetas usando un template

initialCards.forEach(element =>{
  const cardTemplate = '#card';
  const cardRendering = new card(element.name, element.link, cardTemplate);
  cardRendering.createCard()

})
// abre popup para agregar targetas


OpenImgPop(container);

 

 //cierra el popup de para agregar lugares
 closeImgPop();
 

 //agrega targetas usando el boton add

 saveImg();

//crea las istancias de Validacion
const formList = document.querySelectorAll(config.popForm);
formList.forEach((form)=>{
const enableValidation = new FormValidator
enableValidation.enableValidation(config, form);
})

//cerar popups haciendo click fuera de del popup
 const popcontainerdivs = document.querySelectorAll(".popup");
 popcontainerdivs.forEach(closefromdiv);

