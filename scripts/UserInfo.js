export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
  }
  // возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
  getUserInfo() {
    heroName.textContent = inputName.value;
    heroDescription.textContent = inputDescription.value;
  }

  //принимает новые данные пользователя и добавляет их на страницу.

  setUserInfo() {

  }
}
