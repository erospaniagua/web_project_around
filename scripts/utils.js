import { initialCards, card } from "./cards.js";
//boton cerrar pupup

const closePopup = ()=>{
const popcontainer = document.querySelector("#popupProfile");
const closepopup = popcontainer.querySelector('.popup__close')

closepopup.addEventListener('click', ()=>{
  event.preventDefault();
  popcontainer.classList.add('popup_opened')
});
};

//Cambiar el contenido de la secion perfil con los inputs del pupup al guardar

const ProfileEdit =(container) =>{
const popcontainer = document.querySelector("#popupProfile");
const popupProfile = popcontainer.querySelector('#newProfile');
const profilename = container.querySelector('.main__paragraph_name');
const profilejob = container.querySelector('.main__paragraph_job');
const popupname = popcontainer.querySelector('.popup__nombre');
const popupjob = popcontainer.querySelector('.popup__about');
popupProfile.addEventListener('click', ()=>{
  event.preventDefault();
  profilename.textContent = popupname.value || profilename.textContent;
  profilejob.textContent = popupjob.value || profilejob.textContent;
  popcontainer.classList.add('popup_opened');
  popupname.value = '';
  popupjob.value = '';
});

}

// abre popup para agregar targetas

const OpenImgPop = (container)=>{
const popupPlace = document.querySelector('#popupPlace');
const addPlace = container.querySelector('.main__button_add')
addPlace.addEventListener("click" , ()=>{
 popupPlace.classList.remove('popup_opened')
})
};


//cierra el popup de para agregar lugares
const closeImgPop = ()=> {
const closePlacepopup = popupPlace.querySelector('#popupPlaceClose')
closePlacepopup.addEventListener('click', ()=>{
 event.preventDefault();
 popupPlace.classList.add('popup_opened')
});
 };


//agrega targetas usando el boton add
const saveImg =()=>{
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
 const popcontainerdiv = document.querySelector(".popup");
 popcontainerdiv.classList.add('popup_opened');


});
}
//

const closefromdiv = (popupdiv)=>{popupdiv.addEventListener('click', ()=>{
  if (event.target === event.currentTarget){
    event.preventDefault();
    popupdiv.classList.add('popup_opened');
  }
  });
  
}

export {closePopup, ProfileEdit, OpenImgPop, closeImgPop, saveImg, closefromdiv}