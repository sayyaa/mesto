export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
  }

// приватный метод, отвечающий за закрытие попапа клавишей ESC:

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

// публичный метод, закрывающий попапы нажатием на оверлей и крестик:

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (event) => {
      if (
        event.target === event.currentTarget ||
        event.target.classList.contains("popup__close-btn")
      ) {
        this.close(event);
      }
    })
  }

// публичный метод, отвечающий за открытие попапа:

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", (event) => {
      this._handleEscClose(event)
    });
  }

// публичный метод, отвечающий за открытие попапа:

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", (event) => {
      this._handleEscClose(event)
    });
  }
}
