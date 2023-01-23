import Popup from "./Popup.js";

export default class PopupWithApproveDeleteCard extends Popup {
  constructor(popupElement, { handleSubmit } ) {
    super(popupElement)
    this._handleSubmit = handleSubmit;
    this._removeButton = document.querySelector(".popup__remove-btn");
  }

  open(cardId, currentCard) {
    super.open();
    this._cardId = cardId;
    this._currentCard = currentCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._removeButton.addEventListener('click', () => {
      this._handleSubmit(this._cardId, this._currentCard);
    })
  }


}
