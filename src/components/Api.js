export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // запрос информации о пользователе с сервера
  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибочка вышла: ${res.status}`);
      })
  }

  // запрос карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  // редактирование профиля
  editProfileData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  // замена аватара

  setProfileAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }


  // Добавление новой карточки
  // addNewCard(data) {
  //   return fetch(`${this._baseUrl}/cards`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: data.name,
  //       link: data.link })
  //   }).then(res => res.json())
  //     .then(res => console.log(res))




  // deleteCards() {
  //   fetch(`${this._baseUrl}/cards/${this._id})`, {
  //     method: 'DELETE',
  //     headers: this._headers,
  //   })
  // }


}
