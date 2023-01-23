export default class Card {
  constructor({ name, link, _id, owner, likes, userId }, templateSelector, handleCardClick, handleDeleteIconClick, handleLikeClick, ) {
    this._name = name;
    this._link = link;
    this._cardId = _id;
    this._userId = userId;
    // this._userId = 'd01844a04e01376e49b4f5b8'
    this._ownerId = owner._id;
    this._likes = likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
  }

  // получаем готовую разметку, перед размещением на страницу

  _getTemplate() {
    const contentElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);

    return contentElement;
  }


  // метод, добавляющий данные в карточку

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._contentCardName = this._element.querySelector(".content__card-name");

    this._contentImage.src = this._link;
    this._contentCardName.textContent = this._name;
    this._contentImage.alt = `Изображение: ${this._name}`;

    if (this._ownerId !== this._userId) {
      this._contentBin.remove()
    }

    return this._element;
  }

  _toggleLike(event) {
    event.target.classList.toggle("content__like_active");
  }

  _setEventListeners() {

    // удаление карточек

    this._contentBin = this._element.querySelector(".content__bin");
      this._contentBin.addEventListener("click", () => {
        this._handleDeleteIconClick(this._cardId, this)
      })



    // лайк карточке

    this._contentLike = this._element.querySelector(".content__like");

    this._contentLike.addEventListener("click", (event) => {
      this._toggleLike(event);
    });

    //открытие попапа с картинкой

    this._contentImage = this._element.querySelector(".content__img");
    this._contentImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  delete() {
    this._element.remove();
  }
}
