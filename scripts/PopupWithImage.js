import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor() {
      const template = document.querySelector("#openImg").content.cloneNode(true);
      const popupElement = template.querySelector(".popup");
      super(popupElement);
      
      this._template = template;
      this._popupImage = this._popupElement.querySelector('.gallery__img__opened');
      this._popupCaption = this._popupElement.querySelector('.gallery__tittle__opened');
    }
  
    open({ imageSrc, imageTxt }) {
      this._popupImage.src = imageSrc;
      this._popupCaption.textContent = imageTxt;
  
      document.body.appendChild(this._popupElement);
      super.open(); 
    }
  
    close() {
      super.close();
      this._popupImage.src = "";
      this._popupElement.remove();
    }
  }