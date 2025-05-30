const initialCards = [
    {
      name: "Ciudad de Mexico",
      link: "https://images.unsplash.com/photo-1601585196078-c45f883ae135?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Tulum",
      link: "https://images.unsplash.com/photo-1605216663980-b7ca6e9f2451?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Cabo San Lucas",
      link: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Mazatlan",
      link: "https://images.unsplash.com/photo-1656278345194-6f1142022981?q=80&w=2452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Oaxaca",
      link: "https://images.unsplash.com/photo-1625864049430-0186f6778a7e?q=80&w=2769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Colombia",
      link: "https://images.unsplash.com/photo-1534943441045-1009d7cb0bb9?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  const profileImgElment = document.querySelector("#popupImgProfile")
  const profilePopupElement = document.querySelector("#popupProfile");
  const cardPopupElement = document.querySelector("#popupPlace");
  const trashPopElement = document.querySelector("#popupEraseCard");
  const profileImgFormSelector = "#newProfileImg"
  const profileFormSelector = ".popup__form";
  const cardFormSelector = "#newCard";
  const submitProfileButton = document.querySelector('#newProfile');
  const submitCardButton = document.querySelector('#newImg')
  const submitAvatarButton = document.querySelector('#newImgProfile')

  const profileImg = document.querySelector(".main__profile-image")
  const profileName = document.querySelector(".main__paragraph_name");
  const profileJob = document.querySelector(".main__paragraph_job");
  const editProfileBtn = document.querySelector(".main__button_edit");
  const editCardBtn = document.querySelector(".main__button_add");
  const editProfileImg = document.querySelector(".main__profileimg-button")
 

  export { initialCards,
    profileJob,
    profileName,
    profileFormSelector,
    profilePopupElement,
    editProfileBtn,
    cardPopupElement,
    editCardBtn,
    cardFormSelector,
    trashPopElement,
    profileImgFormSelector,
    profileImgElment,
    profileImg,
    editProfileImg,
    submitProfileButton,
    submitCardButton,
    submitAvatarButton
   };