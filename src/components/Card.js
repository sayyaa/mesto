export default class Card {
  constructor({ name, link, _id, owner, likes, userId }, templateSelector, handleCardClick, handleDeleteIconClick, handleLikeClick) {
    this._name = name;
    this._link = link;
    this._cardId = _id;
    this._userId = userId;
    this._ownerId = owner._id;
    this._likes = likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
    this._isLiked = this._likes.some(person => person._id === this._userId);
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

    // проверка: удаляем кнопку корзины
    if (this._ownerId !== this._userId) {
      this._contentBin.remove()
    }
    // получаем количество лайков и записываем в счетчик
    this._likeCounter.textContent = this._likes.length;
    // проверка: если поставлен лайк, кнопка активна
    if(this._isLiked) {
      this._contentLike.classList.add("content__like_active")
    }


    return this._element;
  }

  // переключение состояние лайка

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

    // кнопка лайка - "сердечко"
    this._contentLike = this._element.querySelector(".content__like");
    // счетчик лайков
    this._likeCounter = this._element.querySelector(".content__like-counter");

    this._contentLike.addEventListener("click", (event) => {
      this._handleLikeClick(this._cardId, this, this._likes, this._isLiked)
      this._toggleLike(event);
      this._isLiked = !this._isLiked
    });


    //открытие попапа с картинкой

    this._contentImage = this._element.querySelector(".content__img");
    this._contentImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  // метод, устанавливающий значение числа длинны массива лайков из промиса в элемент
  toggleLike(count) {
    this._likeCounter.textContent = count;
  }

  // метод удаляющий карточку
  delete() {
    this._element.remove();
  }
}
