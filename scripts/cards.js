export default class Card {

  constructor({text , link , _id, like}, selector, handleCardClick, handleCardTrash, handleApi){
    this._text = text ;
    this._link = link ;
    this._id = _id;
    this._selector = selector;
    this._cardsContainer = this._getContainer();
    this._handleCardClick = handleCardClick;
    this._handleCardTrash = handleCardTrash;
    this._api = handleApi;
    this._like = like
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
       const likeButton = event.target.closest(".gallery__card-like");
       if (!likeButton) return
       const apiCall = this._like
       ? this._api.removeLike(this._id)
       : this._api.addLike(this._id);

       apiCall.then(()=>{
        this._like = !this._like;
        likeButton.classList.toggle('gallery__card-liked')
      })
    };

  
  _addTrashListener(event){
    const cardElement = event.target.closest(".gallery__card");
    const confirmDelete = document.querySelector('#delImg');
    this._handleCardTrash.setConfirmation(()=>{
      confirmDelete.textContent = "Deleting ..."
      this._api.deleteCard(this._id)
      .then(()=>{cardElement.remove()})
      .then(()=>{this._handleCardTrash.close()})
      .then(()=>{confirmDelete.textContent = "Si"});
      });
    this._handleCardTrash.open()
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
  _setCardInfo(){
    this._element = this._getTemplate();
    this._element.querySelector('.gallery__card-image').src = this._link
    this._element.querySelector('.gallery__card-name').textContent = this._text
    if(this._like){
      this._element.querySelector('.gallery__card-like').classList.remove('gallery__card-liked')
    }else{this._element.querySelector('.gallery__card-like').classList.add('gallery__card-liked')}
   }

  createCard(){
    
    this._setCardInfo();
    this._setListeners();
    return this._element;
    
    
  }
}
 

