export default class UserInfo {
    constructor({ nameSelector, aboutSelector }) {
    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
  }
  // возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.

  getUserInfo() {
    this._userData = {};
    this._userData['name'] = this._nameSelector.textContent;
    this._userData['about'] = this._aboutSelector.textContent;
    return this._userData;
  }

  //принимает новые данные пользователя и добавляет их на страницу.

  setUserInfo({ name, about }) {
    this._nameSelector.textContent = name;
    this._aboutSelector.textContent = about;
  }
}
