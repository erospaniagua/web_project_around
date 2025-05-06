import  Card  from "../scripts/cards.js";
import {  initialCards,
  profilePopupElement,
  profileFormSelector,
  profileName,
  profileJob,
  editProfileBtn,
  cardPopupElement,
  editCardBtn,
  cardFormSelector

  } from "./constants.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import  {config, FormValidator } from "../scripts/validate.js";


const imagePopup = new PopupWithImage();
imagePopup.setEventListeners(); 


const renderCard = (item) => {
  const cardInstance = new Card(
    { text: item.name, link: item.link },
    '#card',
    imagePopup
  );
  const cardElement = cardInstance.createCard();
  section.addItem(cardElement);
};


  const section = new Section(
  { items: initialCards, renderer: renderCard },
  '.gallery'
);
/////////////////////////////////////////////////
//inicializa el profile popup 
const userInfo = new UserInfo({
  name: profileName,
  job: profileJob
});

const popupProfile = new PopupWithForm(
  profilePopupElement,
  profileFormSelector,
  (formData) => {
    console.log('setting user info', formData.name, formData.job);
    userInfo.setUserInfo({
      name: formData.name,
      job: formData.about
    });
    popupProfile.close();
  }
);
//habilita el profile Section

 const enablePopProfile = () => {
  editProfileBtn.addEventListener("click", () => {
    const { name, job } = userInfo.getUserInfo();
  
    profilePopupElement.querySelector("#name").value = name;
    profilePopupElement.querySelector("#about").value = job;
  
    popupProfile.open();
  });
  popupProfile.setEventListeners();
};

//habilita el addcard section 
const popupCard = new PopupWithForm(
  cardPopupElement,
  cardFormSelector,
  (formData)=>{
    console.log('loading new card',formData);
    const newCard = new Card({ text: formData.place, link: formData.link },
      '#card',
      imagePopup);
      const cardElement = newCard.createCard();
      section.addItem(cardElement);
      popupCard.close();
  }
)
const enablePoupCard = ()=>{
  editCardBtn.addEventListener('click',()=>{
    cardPopupElement.querySelector("#title").value = '';
    cardPopupElement.querySelector("#imgLink").value = '';
    popupCard.open();

  })
  popupCard.setEventListeners()

}

//crea las istancias de Validacion
const enableValidation = ()=>{
const formList = document.querySelectorAll(config.popForm);
formList.forEach((form)=>{
const enableValidation = new FormValidator
enableValidation.enableValidation(config, form);
})

}





export {section, popupProfile, enablePopProfile, enablePoupCard, enableValidation}