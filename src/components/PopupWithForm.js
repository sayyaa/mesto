import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, { handleFormSubmit }) {
    super(popupElement);
    // коллбек сабмита
    this._handleFormSubmit = handleFormSubmit;
    // форма переданного попапа
    this._form = this._popupElement.querySelector('.form');
    // достаём все элементы полей
    this._inputList = [...this._form.querySelectorAll('.form__input')];
  }

  // метод собирает данные всех полей формы

  _getInputValues() {
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    // возвращаем объект значений
    return this._formValues;
  }

  // дополнительный публичный метод, подставляет данные пользователя в форму

  setInputValues(objWithProfileData) {
    this._inputList.forEach(input => {
      input.value = objWithProfileData[input.name]
    });
  }

  // перезаписанный метод добавляет обработчик клика иконке закрытия и обработчик сабмита формы

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

  // перезаписанный метод помимо закрытия сбрасывает форму;
  close() {
    super.close();
    this._form.reset();
  }
}
