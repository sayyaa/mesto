export default class Section {
  constructor(renderer, container, avatarLink) {
    this._renderer = renderer;
    this._container = container;
    this._avatarLink = avatarLink;
  }

  renderItems(items) {
    items.forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

