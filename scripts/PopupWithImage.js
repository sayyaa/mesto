import Popup from "./Popup.js";
import { popupImage, popupImageCaption } from './index.js'

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = popupImage;
    this._popupImageCaption = popupImageCaption;
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageCaption.textContent = name;
    super.open()
  };

}

export default PopupWithImage;
