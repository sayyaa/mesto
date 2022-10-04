import initialCards from "./initialCards.js";
import enableValidationConfig from "./enableValidationConfig.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

(function () {
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
  const inputDescription = document.querySelector(
    ".form__input_text_occupation"
  );
  const inputCity = document.querySelector(".form__input_text_city");
  const inputLink = document.querySelector(".form__input_text_link");

  // прочее

  const heroName = document.querySelector(".hero__name");
  const heroDescription = document.querySelector(".hero__description");
  const popupImage = document.querySelector(".popup__image");
  const popupImageCaption = document.querySelector(".popup__image-caption");

  const content = document.querySelector(".content");
  const templateSelector = document.querySelector('.content__template');
  const contentImage = templateSelector
  .content.querySelector(".content__card")
  .cloneNode(true)
  .querySelector(".content__img");


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
    editValidation.disableValidation(popupEditProfile, enableValidationConfig);
  });

  // слушатель кнопки открытия попапа редактирования карточки //

  buttonAddCard.addEventListener("click", () => {
    openPopup(popupAddCard);
    formAddCard.reset();
    addCardValidation.disableValidation(popupAddCard, enableValidationConfig);
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

  const openImagePopup = (name, link) => {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageCaption.textContent = name;

    openPopup(popupOpenPicture);
  };

  const addCard = (name, link) => {
    const card = new Card({ name, link }, ".content__template", openImagePopup);
    return card.createCard();
  };

  const handleCardFormSubmit = (event) => {
    event.preventDefault();
    const name = inputCity.value;
    const link = inputLink.value;
    const card = addCard(name, link);
    content.prepend(card);
    closePopup(popupAddCard);
  };

  initialCards.forEach((initialCard) => {
    const card = addCard(
      initialCard.name,
      initialCard.link,
      ".content__template",
      openImagePopup
    );
    content.append(card);
  });

  addCard();

  formProfile.addEventListener("submit", changeProfile);
  formAddCard.addEventListener("submit", handleCardFormSubmit);

  const editValidation = new FormValidator(enableValidationConfig, formProfile);
  const addCardValidation = new FormValidator(
    enableValidationConfig,
    formAddCard
  );
  editValidation.enableValidation();
  addCardValidation.enableValidation();
})();
