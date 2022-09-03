// const popup = document.querySelectorAll('.popup');
const popups = [...document.querySelectorAll('.popup')];
// const popup = document.querySelector('.popup')
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupOpenPicture = document.querySelector('.popup_type_open-picture');
const editButton = document.querySelector('.hero__edit');
const addButton = document.querySelector('.hero__add');
const likeButton = document.querySelectorAll('.content__like');
const closeButton = document.querySelectorAll('.popup__close-btn');
const popupForm = document.querySelector('.popup__form');
// const popupForm = [...document.querySelectorAll('.popup__form')];
const inputName = document.querySelector('.popup__form-str_text_name');
const inputDescription = document.querySelector('.popup__form-str_text_occupation');
const inputCity = document.querySelector('.popup__form-str_text_city');
const inputLink = document.querySelector('.popup__form-str_text_link');
const heroName = document.querySelector('.hero__name');
const heroDescription = document.querySelector('.hero__description');
const cardImages = [...document.querySelectorAll('.content__img')];
const cardName = document.querySelectorAll('.content__card-name')
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');
const content = document.querySelector('.content');

const initialCards = [
  {
    name: 'Москва',
    link: 'https://clck.ru/xEU3V'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://clck.ru/xET78'
  },
  {
    name: 'Казань',
    link: './assets/img/cards/kazan.jpg'
  },
  {
    name: 'Нижний Новгород',
    link: 'https://clck.ru/xEVFH'
  },
  {
    name: 'Уфа',
    link: 'https://clck.ru/xEUTa'
  },
  {
    name: 'Оренбург',
    link: 'https://clck.ru/xEVbb'
  }
];

const changeProfile = (event) => {
  event.preventDefault();
  heroName.textContent = inputName.value;
  heroDescription.textContent = inputDescription.value;
  popupClose(popupEditProfile);
}

const savedCurrentProfile = () => {
  inputName.value = heroName.textContent;
  inputDescription.value = heroDescription.textContent;
}

const popupOpen = (popup) => {
  popup.classList.add('popup__opened');
}

editButton.addEventListener('click', () => {
  savedCurrentProfile();
  popupOpen(popupEditProfile);
});

addButton.addEventListener('click', () => {
  popupOpen(popupAddCard);
})

content.addEventListener('click', function(event) {
  if(event.target.classList.contains('content__img')) {
    cardImages.forEach(el => el.addEventListener('click', popupOpen(popupOpenPicture)));
  }
})

const popupClose = (el) => {
  el.classList.remove('popup__opened');
}

popups.forEach(popup => popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup__close-btn')) {
    popupClose(popup)
  }
}))

const putLike = (event) => {
  event.target.classList.toggle('content__like_active');
}

likeButton.forEach(el => el.addEventListener('click', putLike));

// popupForm[1].addEventListener('submit', (event) => {
//   event.preventDefault();
//   addCard();
// })
popupForm.addEventListener('submit', changeProfile);


// popupForm.forEach(el => el.addEventListener('click', () => {

// })

// popups.forEach(popup => popup.addEventListener('submit', (event) => {
//   if (event.target.classList.contains('popup__close-btn')) {
//     popupClose(popup)
//   }
// }))

// console.log(popupForm)
