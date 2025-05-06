import Popup from './Popup.js';
export default class PopupWithForm extends Popup{
    constructor(popupElement, formSelector,callback){
       super(popupElement);
       this._handleFormSubmit = callback;
        this._form = this._popupElement.querySelector(formSelector);
    }
    _getInputValues(){
        this._inputList = this._form.querySelectorAll("input");
        const formValues = {};
        
        this._inputList.forEach((input) => {
          
          formValues[input.name] = input.value;
        });
        
        return formValues;
    }
    setEventListeners(){
        super.setEventListeners();
        this._form.removeEventListener("submit", this._handleSubmit);
        this._form.addEventListener("submit", this._handleSubmit);
    }

    _handleSubmit = (evt) => {
        console.log('submited')
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    close() {
        super.close();
        this._form.reset();
    }
}