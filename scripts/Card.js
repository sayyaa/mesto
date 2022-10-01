class Card {
  // static contentTemplate = document.querySelector(".content__template").content;

  constructor(data, templateSelector, openImagePopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const contentElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".content__card")
      .cloneNode(true);

    return contentElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const contentImage = this._element.querySelector(".content__img");
    const contentCardName = this._element.querySelector(".content__card-name");

    contentImage.src = this._link;
    contentCardName.textContent = this._name;
    contentImage.alt = `Город ${this._name}`;

    return this._element;
  }

  _toggleLike(event) {
    event.target.classList.toggle("content__like_active");
  }

  _setEventListeners() {
    // удаление карточек

    const contentBin = this._element.querySelector(".content__bin");
    contentBin.addEventListener("click", () => {
      this._element.remove();
    });

    // лайк карточке

    const contentLike = this._element.querySelector(".content__like");

    contentLike.addEventListener("click", (event) => {
      this._toggleLike(event);
    });

    //открытие попапа с картинкой

    const contentImage = this._element.querySelector(".content__img");
    contentImage.addEventListener("click", () => {
      this._openImagePopup(this._name, this._link);
    });
  }
}

export default Card;
