export default class UserInfo {
  constructor({ nameElement, aboutElement }) {
    this._nameElement = nameElement;
    this._aboutElement = aboutElement;
  }
  // возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.

  getUserInfo() {
    this._userData = {};
    this._userData['name'] = this._nameElement.textContent;
    this._userData['about'] = this._aboutElement.textContent;
    return this._userData;
  }

  //принимает новые данные пользователя и добавляет их на страницу.

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }
}
