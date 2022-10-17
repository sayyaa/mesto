class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", (event) => {
      this._handleEscClose(event)
    });
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", (event) => {
      this._handleEscClose(event)
    });
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (event) => {
      if (
        event.target === event.currentTarget ||
        event.target.classList.contains("popup__close-btn")
      ) {
        this.close();
      }
    })
  }

}

export default Popup;
