import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupElement, { handleFormSubmit }) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    // достаём все элементы полей
    this._inputList = [...popupElement.querySelectorAll('.form__input')];
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

  // перезаписанный метод добавляет обработчик клика иконке закрытия и обработчик сабмита формы

  setEventListeners(event) {
    this._inputList.forEach(input => {
      input.addEventLisneter('submit', () => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._close();})
    })
  }

  // перезаписанный метод помимо закрытия сбрасывает форму;
  close() {
    super.close();
    this.formSubmit.reset();
  }

}
