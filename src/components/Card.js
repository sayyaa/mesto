export default class Card {
  constructor({ name, link, _id, cardId, owner, likes }, templateSelector, handleCardClick, handleLikeClick, handleDeleteIconClick ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._cardId = cardId;
    this._owner = owner;
    this._likes = likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
  }

  // получаем готовую разметку, перед размещением на страницу

  _getTemplate() {
    const contentElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);

    return contentElement;
  }

  // _checkCardOwner() {
  //   if(this_owner.this._id !== user.this._id)
  // }

  // метод, добавляющий данные в карточку

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._contentCardName = this._element.querySelector(".content__card-name");

    this._contentImage.src = this._link;
    this._contentCardName.textContent = this._name;
    this._contentImage.alt = `Изображение: ${this._name}`;

    return this._element;
  }

  _toggleLike(event) {
    event.target.classList.toggle("content__like_active");
  }

  _setEventListeners() {

    // удаление карточек

    this._contentBin = this._element.querySelector(".content__bin");
    this._contentBin.addEventListener("click", () => {
      this._element.remove();
    });

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
}
