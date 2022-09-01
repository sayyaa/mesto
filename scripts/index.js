const popup = document.querySelectorAll('.popup');
const editButton = document.querySelector('.hero__edit');
const addButton = document.querySelector('.hero__add');
const likeButton = document.querySelectorAll('.content__like');
const closeButton = document.querySelectorAll('.popup__close-btn');
const popupForm = document.querySelector('.popup__form')
const inputName = document.querySelector('.popup__form-str_text_name');
const inputDescription = document.querySelector('.popup__form-str_text_occupation');
const heroName = document.querySelector('.hero__name');
const heroDescription = document.querySelector('.hero__description');

const popupOpen = (event) => {
  if (event.target.classList.contains('hero__edit')) {
    inputName.value = heroName.textContent;
    inputDescription.value = heroDescription.textContent;
    popup[0].classList.add('popup__opened');
  } else if (event.target.classList.contains('hero__add')) {
      popup[1].classList.add('popup__opened');
  }
}

const popupClose = () => {
  popup.forEach((el) => el.classList.remove('popup__opened'));
}

const changeProfile = (event) => {
  event.preventDefault();
  heroName.textContent = inputName.value;
  heroDescription.textContent = inputDescription.value;
  popupClose();
}

const putLike = (event) => {
  event.target.classList.toggle('content__like_active');
}

editButton.addEventListener('click', popupOpen);
addButton.addEventListener('click', popupOpen);
likeButton.forEach(el => el.addEventListener('click', putLike));
closeButton.forEach((el) => el.addEventListener('click', popupClose))
popupForm.addEventListener('submit', changeProfile);
