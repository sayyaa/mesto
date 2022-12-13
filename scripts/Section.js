export default class Section {
  constructor({items, renderer}, templateSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._templateSelector = templateSelector;
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item)
    })
  }

  addItem(element) {
    this._templateSelector.append(element);
  }

}

