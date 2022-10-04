class FormValidator {
  constructor(obj, form) {
    this._obj = obj;
    this._form = form;
    this._inputs = [...this._form.querySelectorAll(this._obj.inputSelector)];
    this._button = this._form.querySelector(this._obj.submitButtonSelector);
  }

  // метод, показывающий сообщение об ошибке, когда поле становится не валидным

  _showInputError(input, errorMessage) {
    const error = this._form.querySelector(`.${input.id}-error`);

    error.textContent = errorMessage;
    error.classList.add(this._obj.errorClass);
    input.classList.add(this._obj.inputErrorClass);
  }

  // метод, скрывающий сообщение об ошибке, когда поле становится валидным

  _hideInputError(input) {
    const error = this._form.querySelector(`.${input.id}-error`);

    error.classList.remove(this._obj.errorClass);
    input.classList.remove(this._obj.inputErrorClass);
    error.textContent = "";
  }

  // метод, проверяющий инпут на валидность

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  // метод, проверяющий есть ли поле не прошедшее валидацию, если возратит true значит невалид

  _hasInvalidInput() {
    return this._inputs.some((input) => !input.validity.valid);
  }

  // метод делающий кнопку неактивной если поле невалидно

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._obj.inactiveButtonClass);
      this._button.setAttribute("disabled", true);
    } else {
      this._button.classList.remove(this._obj.inactiveButtonClass);
      this._button.removeAttribute("disabled", false);
    }
  };
  // метод устанавливающий обработчик на поля

  enableValidation() {

    this._toggleButtonState();

    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  disableValidation() {

    this._inputs.forEach((input) => {
      this._hideInputError(input);
    });

    this._toggleButtonState();
  }
}

export default FormValidator;
