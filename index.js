const popup = document.querySelector('.popup');
const editButton = document.querySelector('.hero__edit');
const closeButton = document.querySelector('.popup__close-btn');
const popupForm = document.querySelector('.popup__form')
const inputName = document.getElementById('popup__input-name');
const inputDescription = document.getElementById('popup__input-description');
const heroName = document.querySelector('.hero__name');
const heroDescription = document.querySelector('.hero__description');

const popupOpen = () => {
  popup.classList.add('popup__opened');
  console.log('1')
}

const popupClose = () => {
  popup.classList.remove('popup__opened')
}

const changeProfile = (evt) => {
  evt.preventDefault();
  heroName.textContent = inputName.value;
  heroDescription.textContent = inputDescription.value;
  popup.classList.remove('popup__opened')
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', changeProfile);

