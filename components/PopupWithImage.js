import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement, popupImage, popupImageCaption) {
    super(popupElement);
    this._popupImage = popupImage;
    this._popupImageCaption = popupImageCaption;
  }

  // метод, открывающий попап, перезаписывает метод open() родительского класса Popup:

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageCaption.textContent = name;
    super.open();
  }
}


