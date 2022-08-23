const popup = document.querySelector('.popup');
const editButton = document.querySelector('.hero__edit');
const closeButton = document.querySelector('.popup__close-btn');
const popupForm = document.querySelector('.popup__form')
const inputName = document.querySelector('.popup__form-str_text_name');
const inputDescription = document.querySelector('.popup__form-str_text_occupation');
const heroName = document.querySelector('.hero__name');
const heroDescription = document.querySelector('.hero__description');

const popupOpen = () => {
  inputName.value = heroName.textContent;
  inputDescription.value = heroDescription.textContent;
  popup.classList.add('popup__opened');
}

const popupClose = () => {
  popup.classList.remove('popup__opened')
}

const changeProfile = (evt) => {
  evt.preventDefault();
  heroName.textContent = inputName.value;
  heroDescription.textContent = inputDescription.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', changeProfile);

