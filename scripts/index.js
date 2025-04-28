//imports
import { initialCards, card } from "./cards.js";
import  enableValidation  from "./validate.js";
//botton editar perfil
const popcontainer = document.querySelector("#popupProfile");

const container= document.querySelector(".main");

const editprofile = container.querySelector(".main__button_edit");



editprofile.addEventListener('click', ()=>{
  popcontainer.classList.remove('popup_opened')
});

//boton cerrar pupup

const closepopup = popcontainer.querySelector('.popup__close')

closepopup.addEventListener('click', ()=>{
  event.preventDefault();
  popcontainer.classList.add('popup_opened')
});

//cerar popups haciendo click fuera de del popup

const popcontainerdivs = document.querySelectorAll(".popup");
const closefromdiv = (popupdiv)=>{popupdiv.addEventListener('click', ()=>{
  if (event.target === event.currentTarget){
    event.preventDefault();
    popupdiv.classList.add('popup_opened');
  }
  });
  
}
popcontainerdivs.forEach(closefromdiv);

//poner el contenido del perfil en los campos del popup por defecto

const profilename = container.querySelector('.main__paragraph_name');

const profilejob = container.querySelector('.main__paragraph_job');

const popupname = popcontainer.querySelector('.popup__nombre');

const popupjob = popcontainer.querySelector('.popup__about');

popupjob.placeholder = profilejob.textContent;
popupname.placeholder = profilename.textContent;

//Cambiar el contenido de la secion perfil con los inputs del pupup al guardar

const popupProfile = popcontainer.querySelector('#newProfile');

popupProfile.addEventListener('click', ()=>{
  event.preventDefault();
  profilename.textContent = popupname.value || profilename.textContent;
  profilejob.textContent = popupjob.value || profilejob.textContent;
  popcontainer.classList.add('popup_opened');
  popupname.value = '';
  popupjob.value = '';

});


//toma un array y crea las targetas usando un template

initialCards.forEach(element =>{
  const cardTemplate = '#card';
  const cardRendering = new card(element.name, element.link, cardTemplate);
  cardRendering.createCard()

})
//



 // abre popup para agregar targetas

 const popupPlace = document.querySelector('#popupPlace');

 const addPlace = container.querySelector('.main__button_add')

 addPlace.addEventListener("click" , ()=>{
  popupPlace.classList.remove('popup_opened')
 })

 //cierra el popup de para agregar lugares

 const closePlacepopup = popupPlace.querySelector('#popupPlaceClose')


closePlacepopup.addEventListener('click', ()=>{
  event.preventDefault();
  popupPlace.classList.add('popup_opened')
});

 //agrega targetas usando el boton add

 const saveNewPlace = document.querySelector('#newCard');
 const newTitle = popupPlace.querySelector('#title');
 const newLink = popupPlace.querySelector('#imgLink');
 saveNewPlace.addEventListener('submit', (event)=>{
  event.preventDefault();
  const cardAdded = new card(newTitle.value ,newLink.value, '#card')
  cardAdded.createCard();
  popupPlace.classList.add('popup_opened');
  newTitle.value = '';
  newLink.value = '';
  const popcontainerdivs = document.querySelectorAll(".popup");
  popcontainerdivs.forEach(closefromdiv);

 });

//borra las targetas con el botton de trash
/*const cardsContainer = document.querySelector('.gallery');
 cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__trash")) {
    const cardElement = event.target.closest(".gallery__card");
    cardElement.remove();
  }
});*/

//agrega interactividad al botton de like on click

/*cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__card-like")) {
  const toggleLike = event.target.closest(".gallery__card-text");
   toggleLike.querySelector(".gallery__card-like").classList.toggle("gallery__card-liked");
  }
});*/


//abre la imagen haciendo click en ella




//cierra la imagen al dar click en el boton cerrar






//habilitar validacion de formulario

enableValidation();







