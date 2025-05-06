export default class Card {

  constructor({text , link }, selector, handleCardClick){
    this._text = text ;
    this._link = link ;
    this._selector = selector;
    this._cardsContainer = this._getContainer();
    this._handleCardClick = handleCardClick
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
    
  

  _addOpenImgListener(){
    this._handleCardClick.open({
      imageSrc: this._link,
      imageTxt: this._text,
    });
  }

  _setListeners(){
    this._element.addEventListener("click", (event) => {
      if (event.target.classList.contains("gallery__card-like")) {
        this._addLikeListener(event);
      }

      if (event.target.classList.contains("gallery__trash")) {
        this._addTrashListener(event);
      }

      if (
        event.target.classList.contains("gallery__img__button") ||
        event.target.closest(".gallery__img__button")
      ) {
        this._addOpenImgListener();
      }
    });
  }

  createCard(){
    
    this._element = this._getTemplate();
    this._element.querySelector('.gallery__card-image').src = this._link
    this._element.querySelector('.gallery__card-name').textContent = this._text
    this._setListeners();
    return this._element;
    
    
  }
}
 

