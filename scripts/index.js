// Массив попапов

const popups = [...document.querySelectorAll(".popup")];

// Отдельные попапы

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupOpenPicture = document.querySelector(".popup_type_open-picture");

// формы попапов

const formProfile = popupEditProfile.querySelector(".form");
const formAddCard = popupAddCard.querySelector(".form");

// кнопки

const buttonEditProfile = document.querySelector(".hero__edit");
const buttonAddCard = document.querySelector(".hero__add");
const buttonFormProfile = popupEditProfile.querySelector(".form__save-btn");
const buttonFormAddCard = popupAddCard.querySelector(".form__save-btn");

// поля

const inputName = document.querySelector(".form__input_text_name");
const inputDescription = document.querySelector(".form__input_text_occupation");
const inputCity = document.querySelector(".form__input_text_city");
const inputLink = document.querySelector(".form__input_text_link");

// прочее

const heroName = document.querySelector(".hero__name");
const heroDescription = document.querySelector(".hero__description");
const popupImage = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__image-caption");

const content = document.querySelector(".content");
const contentTemplate = document.querySelector(".content__template").content;

// отдельные селекторы

const inactiveButtonClass = "form__save-btn_disabled";
const inputErrorClass = "form__input_type_error";
const errorClass = "form__input-error_visible";

// функия изменения профиля из формы //

const changeProfile = (event) => {
  event.preventDefault();
  heroName.textContent = inputName.value;
  heroDescription.textContent = inputDescription.value;
  closePopup(popupEditProfile);
};

// функция для заполненных импутов при открытии попапа //

const fillProfileInputs = () => {
  inputName.value = heroName.textContent;
  inputDescription.value = heroDescription.textContent;
};

// универсальная функция открытия попапа //

const openPopup = (popup) => {
  popup.classList.add("popup__opened");
  document.addEventListener("keydown", closePopupByEsc);
};

// слушатель кнопки открытия попапа профиля и заполнение формы //

buttonEditProfile.addEventListener("click", () => {
  fillProfileInputs();
  openPopup(popupEditProfile);
  enableButton(buttonFormProfile, enableValidationConfig);
  disableValidation(popupEditProfile, enableValidationConfig);
});

// слушатель кнопки открытия попапа редактирования карточки //

buttonAddCard.addEventListener("click", () => {
  openPopup(popupAddCard);
  formAddCard.reset();
  disableButton(buttonFormAddCard, enableValidationConfig);
  disableValidation(popupAddCard, enableValidationConfig);
});

// универсальная функция закрытия попапа /

const closePopup = (popup) => {
  popup.classList.remove("popup__opened");
  document.removeEventListener("keydown", closePopupByEsc);
};

// функция закрытия попапа нажатием на ескейп

const closePopupByEsc = (event) => {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup__opened");
    closePopup(openedPopup);
  }
};

// обработчик закрывающий попапы нажатием на оверлей и крестик //

popups.forEach((popup) =>
  popup.addEventListener("mousedown", (event) => {
    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("popup__close-btn")
    ) {
      closePopup(popup);
    }
  })
);

// функция переключающая состояния лайков //

const toggleLike = (event) => {
  event.target.classList.toggle("content__like_active");
};

// функция создания карточки //

const createCard = ({ name, link }) => {
  const contentElement = contentTemplate
    .querySelector(".content__card")
    .cloneNode(true);

  const contentImage = contentElement.querySelector(".content__img");
  const contentCardName = contentElement.querySelector(".content__card-name");

  contentImage.src = link;
  contentCardName.textContent = name;
  contentImage.alt = `Город ${name}`;

  // удаление карточки

  const contentBin = contentElement.querySelector(".content__bin");

  contentBin.addEventListener("click", () => {
    contentElement.remove();
  });

  // лайк карточке

  const contentLike = contentElement.querySelector(".content__like");

  contentLike.addEventListener("click", (event) => {
    toggleLike(event);
  });

  // открытие попапа изображения

  contentImage.addEventListener("click", (event) => {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageCaption.textContent = name;

    openPopup(popupOpenPicture);
  });

  return contentElement;
};

// функция добавления карточки //

const addCard = ({ name, link }) => {
  const cardElement = createCard({ name, link });
  content.prepend(cardElement);
};

initialCards.forEach(addCard);

// функция обработчик //

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  const name = inputCity.value;
  const link = inputLink.value;

  addCard({ name, link });
  closePopup(popupAddCard);

  event.target.reset();
};

formProfile.addEventListener("submit", changeProfile);
formAddCard.addEventListener("submit", handleCardFormSubmit);
