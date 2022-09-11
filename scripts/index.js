import { disableButton, enableButton, hideInputError } from "./validate.js";

const popups = [...document.querySelectorAll(".popup")];
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupOpenPicture = document.querySelector(".popup_type_open-picture");
const editButton = document.querySelector(".hero__edit");
const addButton = document.querySelector(".hero__add");
const inputName = document.querySelector(".form__input_text_name");
const inputDescription = document.querySelector(".form__input_text_occupation");
const inputCity = document.querySelector(".form__input_text_city");
const inputLink = document.querySelector(".form__input_text_link");
const heroName = document.querySelector(".hero__name");
const heroDescription = document.querySelector(".hero__description");
const popupImage = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__image-caption");
const content = document.querySelector(".content");
const activeButtonClasses = [...document.querySelectorAll(".form__save-btn")];
const inactiveButtonClass = "form__save-btn_disabled";
const inputErrorClass = 'form__input_type_error';
const errorClass = 'form__input-error_visible';


const initialCards = [
  {
    name: "Новотроицк",
    link: "./assets/img/cards/novotroitsk.jpg",
  },
  {
    name: "Оренбург",
    link: "./assets/img/cards/orenburg.jpg",
  },
  {
    name: "Уфа",
    link: "./assets/img/cards/ufa.jpg",
  },
  {
    name: "Казань",
    link: "./assets/img/cards/kazan.jpg",
  },
  {
    name: "Нижний Новгород",
    link: "./assets/img/cards/novgorod.jpg",
  },
  {
    name: "Москва",
    link: "./assets/img/cards/moscow.jpg",
  },
];

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
  document.addEventListener("keydown", closePopupWithKey);
  document.addEventListener("click", closePopupWithOverlay);

  const form = popup.querySelector('.form');
  const inputs = [...form.querySelectorAll('.form__input')];
  inputs.forEach(input => {
    hideInputError(form, input, {errorClass, inputErrorClass});
  })
};

// слушатель кнопки открытия попапа профиля и заполнение формы //

editButton.addEventListener("click", () => {
  fillProfileInputs();
  openPopup(popupEditProfile);
  activeButtonClasses.forEach((activeButtonClass) =>
    enableButton(activeButtonClass, { inactiveButtonClass })
  );
});

const clearInputValue = (popup) => {
  const form = popup.querySelector('.form');
  const inputs = [...form.querySelectorAll('.form__input')];
  inputs.forEach(input => input.value = '');
}

// слушатель кнопки открытия попапа редактирования карточки //

addButton.addEventListener("click", () => {
  openPopup(popupAddCard);
  activeButtonClasses.forEach((activeButtonClass) =>
    disableButton(activeButtonClass, { inactiveButtonClass })
  );
  clearInputValue(popupAddCard)
});

// универсальная функция закрытия попапа /

const closePopup = (popup) => {
  popup.classList.remove("popup__opened");
  // при закрытии попапа текст внутри полей карточки сбрасывается;

};

// функция закрытия попапа нажатием на ескейп

const closePopupWithKey = (event) => {
  popups.forEach((popup) => {
    if (event.key === "Escape") {
      closePopup(popup);
    }
    document.removeEventListener("keydown", closePopupWithKey);
  });
};

// функция закрытия попапа нажатием на оверлей //

const closePopupWithOverlay = () => {
  popups.forEach((popup) =>
    popup.addEventListener("mousedown", (event) => {
      if (event.target === event.currentTarget) {
        closePopup(popup);
      }
      document.removeEventListener("click", closePopupWithOverlay);
    })
  );
};

// слушатель коллекции попап элементов //

popups.forEach((popup) =>
  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup__close-btn")) {
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
  const contentTemplate = document.querySelector(".content__template").content;
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

popupEditProfile.addEventListener("submit", changeProfile);
popupAddCard.addEventListener("submit", handleCardFormSubmit);
