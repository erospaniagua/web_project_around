export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup') || 
                e.target.classList.contains('popup__close') || 
                e.target.closest('.popup__close')) {
                this.close();
            }
        });
    }

    open() {
        this._popupElement.classList.remove('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.add('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}