import Popup from './Popup.js';
export default class PopupWithConfirmation extends Popup{
    constructor(popupElement){
    super(popupElement)
    this._confirmButton = popupElement.querySelector("#delImg")
    }
    setConfirmation(callback){
        this._callback = callback
    }

    setEventListeners(){
        super.setEventListeners();
        this._confirmButton.addEventListener("click", (e)=>{
            console.log("erasing cardd")
            e.preventDefault;
            if(this._callback){
        this._callback()
            }

        })
    }
    
}