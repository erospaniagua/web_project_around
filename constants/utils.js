import  Card  from "../scripts/cards.js";
import {  initialCards,
  profilePopupElement,
  profileFormSelector,
  profileName,
  profileJob,
  editProfileBtn,
  cardPopupElement,
  editCardBtn,
  cardFormSelector,
  trashPopElement,
  profileImgElment,
  profileImgFormSelector,
  profileImg,
  editProfileImg,
  submitProfileButton,
  submitCardButton,
  submitAvatarButton
  } from "./constants.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import  {config, FormValidator } from "../scripts/validate.js";
import { Api } from "../scripts/Api.js";
import PopupWithConfirmation from "../scripts/PopupWithConfirmation.js"


const imagePopup = new PopupWithImage();
imagePopup.setEventListeners(); 

const trashPopup = new PopupWithConfirmation(trashPopElement);
trashPopup.setEventListeners();

const api = new Api({baseUrl:"https://around-api.es.tripleten-services.com/v1/", headers: {
  authorization: "501126dc-a13f-46b3-9344-22355c0ac94e"
}});

const renderCard = (item) => {
  const cardInstance = new Card(
    { text: item.name, link: item.link, _id: item._id, like:item.isLiked },
    '#card',
    imagePopup,
    trashPopup,
    api
  );
  const cardElement = cardInstance.createCard();
  section.addItem(cardElement);
};
///////////////////////////////////////////////////
//redner inicial targetas y profile info


const userInfo = new UserInfo({
  name: profileName,
  job: profileJob,
  avatar: profileImg
});

const section = new Section(
  { items: [], renderer: renderCard },
  '.gallery'
);



const initialRender =()=>{
 api.getAppData()
 .then(([userData, cardsData])=>{
  //renderiza el user 
  userInfo.setUserInfo({name:userData.name, job:userData.about, avatar:userData.avatar});
  //renderiza las targetas
  section.setItems(cardsData.reverse());
  section.renderAll()
  })
 .catch((err)=>console.log('App load error:' + err))
}
  ////////////////////////////
  //inicializa popup para editar la imagen de perfil
  const popImgProfile = new PopupWithForm(
   profileImgElment,
   profileImgFormSelector,
   (formData)=>{
    submitAvatarButton.textContent = "Loading ..."
    api.editProfileImg({avatar:formData.link})
    .then(()=>{
      profileImg.src = formData.link;
      popImgProfile.close;
    })
    .finally(()=>{
      submitAvatarButton.textContent = "Guardar"
    });
    
   }
  );

  const enableImgProfilePop = () =>{

    editProfileImg.addEventListener('click',()=>{
      popImgProfile.open();

    });
    popImgProfile.setEventListeners();
  }


/////////////////////////////////////////////////
//inicializa el profile popup 

const popupProfile = new PopupWithForm(
  profilePopupElement,
  profileFormSelector,
  (formData) => {
    submitProfileButton.textContent = "Loading ..."
    userInfo.setUserInfo({
      name: formData.name,
      job: formData.about,
      avatar: profileImg.src
    });
    //actualiza base de datos
    api.editProfile({name:formData.name, about:formData.about})
    .then(()=>{popupProfile.close()})
    .finally(()=>{submitProfileButton.textContent = "Guardar"});
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
    submitCardButton.textContent = "Loading ..."
    //manda nueva targeta al servidor
    api.addCard({name:formData.place,link:formData.link})
    //crea una nueva targeta para renderizar
    .then((data)=>{
      const newCard = new Card(
        { text: data.name, link: data.link, _id: data._id, like:data.isLiked},
        '#card',
        imagePopup,
        trashPopup,
        api
      );
      const cardElement = newCard.createCard();
      section.addItem(cardElement); 
      popupCard.close();
      })
    .finally(()=>{
      submitCardButton.textContent = "Guardar"
      });
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





export {section, popupProfile, enablePopProfile, enablePoupCard, enableValidation, initialRender,enableImgProfilePop}