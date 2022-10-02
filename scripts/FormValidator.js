class FormValidator {

  constructor(obj, form) {
    this._obj = obj;
    this._form = form;
  }

  // функция, показывающая сообщение об ошибке, когда поле становится не валидным

  _findVariableError(input) {
    const error = this._form.querySelector(`.${input.id}-error`);
    return error
  }

  _showInputError(input, errorMessage) {
    this._findVariableError(input).textContent = errorMessage;
    this._findVariableError(input).classList.add(this._obj.errorClass);
    input.classList.add(this._obj.inputErrorClass);
  }

  // функция, скрывающая сообщение об ошибке, когда поле становится валидным

  _hideInputError(input) {
    this._findVariableError(input).classList.remove(this._obj.errorClass);
    input.classList.remove(this._obj.inputErrorClass);
    this._findVariableError(input).textContent = "";
  }

  // функция, проверяющая инпут на валидность

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(
        input,
        input.validationMessage
      );
    } else {
      this._hideInputError(input);
    }
  }

  // функция выключения кнопки

  disableButton(button) {
    button.classList.add(this._obj.inactiveButtonClass);
    button.setAttribute("disabled", true);
  }

  // функция включения кнопки

  enableButton(button) {
    button.classList.remove(this._obj.inactiveButtonClass);
    button.removeAttribute("disabled", false);
  }

  // функция, проверяющая есть ли поле не прошедшее валидацию, если возратит true значит невалид

  _hasInvalidInput(inputs) {
    return inputs.some((input) => !input.validity.valid);
  }

  // функция делающая кнопку неактивной если поле невалидно

  _toggleButtonState = (inputs, button) => {
    if (this._hasInvalidInput(inputs)) {
      this.disableButton(button);
    } else {
      this.enableButton(button);
    }
  };
  // функция устанавливающая обработчик на поля

  _setEventListeners() {
    const inputs = [...this._form.querySelectorAll(this._obj.inputSelector)];
    const button = this._form.querySelector(this._obj.submitButtonSelector);

    this._toggleButtonState(inputs, button);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputs, button);
      });
    });
  }

  enableValidation() {
    const forms = [...document.querySelectorAll(this._obj.formSelector)];
    forms.forEach(() => {
      this._setEventListeners();
    });


  }

  disableValidation() {
    const inputs = [...this._form.querySelectorAll(this._obj.inputSelector)];
    inputs.forEach((input) => {
      this._hideInputError(input);
    });
  }
}

export default FormValidator;
