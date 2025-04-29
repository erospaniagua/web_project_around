

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

class card {

  constructor(text , link , selector){
    this._text = text ;
    this._link = link ;
    this._selector = selector;
    this._cardsContainer = this._getContainer(); ;
  }
  _getContainer(){
      return document.querySelector('.gallery');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.gallery__card')
      .cloneNode(true);
      return cardElement;
  }

  _addLikeListener(event){   
       const toggleLike = event.target.closest(".gallery__card-text");
       toggleLike.querySelector(".gallery__card-like").classList.toggle("gallery__card-liked"); 
    };

  
  _addTrashListener(event){
    const cardElement = event.target.closest(".gallery__card");
    cardElement.remove();
   }
    
  

  _addOpenImgListener(event){
    const cardOpenedTemplate = document.querySelector("#openImg").content;
    const cardOpened =  cardOpenedTemplate.querySelector(".gallery__card__opened").cloneNode(true); 
      const container= document.querySelector(".main");
      const button = event.target.closest(".gallery__img__button");
      const title = event.target.closest(".gallery__card")
      if (button){
        event.preventDefault();
        cardOpened.querySelector(".gallery__img__opened").src = event.target.src;
        cardOpened.querySelector(".gallery__tittle__opened").textContent = title.querySelector(".gallery__card-name").textContent;
        cardOpened.addEventListener("click",(event)=>{
          const opendImg = event.target.classList.contains("gallery__card__opened");
          const closeIcon = event.target.closest(".popup__Img__Close")
          if(closeIcon && opendImg){
          opendImg.remove();
           }
        })
        container.append(cardOpened);     
      }   
      const cardopendcontainer = (element)=>{element.addEventListener('click', ()=>{element.remove()})}
      cardopendcontainer(cardOpened)
  }

  _setListeners(){
    this._element.addEventListener("click", (event) => {
      if (event.target.classList.contains("gallery__card-like")) {
        this._addLikeListener(event);
      }

      if (event.target.classList.contains("gallery__trash")) {
        this._addTrashListener(event);
      }

      if (event.target.classList.contains("gallery__card-image")) {
        this._addOpenImgListener(event);
      }
    });
  }

  createCard(){
    
    this._element = this._getTemplate();
    this._element.querySelector('.gallery__card-image').src = this._link
    this._element.querySelector('.gallery__card-name').textContent = this._text
    this._setListeners();
    this._cardsContainer.append(this._element);
    
    
  }
}
 

export { initialCards, card };