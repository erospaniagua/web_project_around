/*const showInputError = (formElement, inputElement, errorMessage,) => {
  const errorElement = formElement.querySelector(`.popup__input-error_${inputElement.id}`);
  inputElement.classList.add('popup__input_type-error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_active');
};

const hideInputError = (formElement, inputElement,) => {
  const errorElement = formElement.querySelector(`.popup__input-error_${inputElement.id}`);
  inputElement.classList.remove('popup__input_type-error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__error_active');
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement,) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled');
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.classList.remove('popup__button_disabled');
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  
  const buttonElement = formElement.querySelector(".popup__guardar");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {   
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);   
    const fieldsetList = Array.from(formElement.querySelectorAll(".popup__fieldset"));
    fieldsetList.forEach((fieldsetElement) => {
      setEventListeners(fieldsetElement);
    });
  });
};*/

const config = {
  popForm : ".popup__form",
  popField :".popup__fieldset",
  popInput : ".popup__input",
  popGuardar : ".popup__guardar",
  popButtonOff : "popup__button_disabled",
  popErrOn : "popup__error_active",
  popInputType : "popup__input_type-error",
}

class FormValidator{
  constructor(config , form){
    this._config = config;
    this._form = form;
  }
  _showInputError(formElement, inputElement, errorMessage,){
    const errorElement = formElement.querySelector(`.popup__input-error_${inputElement.id}`);
    inputElement.classList.add(this._config.popInputType);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.popErrOn);
  };

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.popup__input-error_${inputElement.id}`);
    inputElement.classList.remove(this._config.popInputType);
    errorElement.textContent = '';
    errorElement.classList.remove(this._config.popErrOn);
  };

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _hasInvalidInput (inputList) {
    return Array.from(inputList).some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState (inputList, buttonElement,){
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._config.popButtonOff);
      buttonElement.setAttribute('disabled', '');
    } else {
      buttonElement.classList.remove(this._config.popButtonOff);
      buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListener (formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._config.popInput));    
    const buttonElement = formElement.querySelector(this._config.popGuardar);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation (config, form) {
      this._config = config;
      this._form = form; 
      this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListener(this._form);   
      const fieldset = this._form.querySelector(this._config.popField);
      this._setEventListener(fieldset);
      ;
    };
  };



export {config , FormValidator};







