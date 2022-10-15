class Card {

  constructor({name, link}, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    // this._openImagePopup = openImagePopup;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const contentElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);

    return contentElement;
  }

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

    // this._contentImage = this._element.querySelector(".content__img");
    // this._contentImage.addEventListener("click", () => {
    //   this._openImagePopup(this._name, this._link);
    // });

    this._contentImage = this._element.querySelector(".content__img");
    this._contentImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  // добавляет карточку через форму

  handleCardFormSubmit() {
    // ?????????????????///
  }
}

export default Card;
