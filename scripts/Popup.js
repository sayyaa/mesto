class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup__opened");
    document.addEventListener("keydown", () => {
      this._handleEscClose()
    });
  }

  close() {
    this._popupSelector.classList.remove("popup__opened");
    document.removeEventListener("keydown", () => {
      this._handleEscClose
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
