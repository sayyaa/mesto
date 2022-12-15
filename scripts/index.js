import initialCards from "./initialCards.js";
import enableValidationConfig from "./enableValidationConfig.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

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
  const templateSelector = document.querySelector(".content__template");
  const contentImage = templateSelector.content
    .querySelector(".content__card")
    .cloneNode(true)
    .querySelector(".content__img");

  // отдельные селекторы

  const inactiveButtonClass = "form__save-btn_disabled";
  const inputErrorClass = "form__input_type_error";
  const errorClass = "form__input-error_visible";

  // функия изменения профиля из формы //

  // const changeProfile = (event) => {
  //   event.preventDefault();
  //   heroName.textContent = inputName.value;
  //   heroDescription.textContent = inputDescription.value;
  //   closePopup(popupEditProfile);
  // };

  // функция для заполненных импутов при открытии попапа //

  // const fillProfileInputs = () => {
  //   inputName.value = heroName.textContent;
  //   inputDescription.value = heroDescription.textContent;
  // };

  // универсальная функция открытия попапа //

  // const openPopup = (popup) => {
  //   popup.classList.add("popup__opened");
  //   document.addEventListener("keydown", closePopupByEsc);
  // };

  // слушатель кнопки открытия попапа профиля и заполнение формы //

  // buttonEditProfile.addEventListener("click", () => {
  //   fillProfileInputs();
  //   openPopup(popupEditProfile);
  //   profileValidation.disableValidation(popupEditProfile, enableValidationConfig);
  // });

  // слушатель кнопки открытия попапа редактирования карточки //

  // buttonAddCard.addEventListener("click", () => {
  //   openPopup(popupAddCard);
  //   formAddCard.reset();
  //   addCardValidation.disableValidation(popupAddCard, enableValidationConfig);
  // });



  // универсальная функция закрытия попапа /

  // const closePopup = (popup) => {
  //   popup.classList.remove("popup__opened");
  //   document.removeEventListener("keydown", closePopupByEsc);
  // };

  // функция закрытия попапа нажатием на ескейп

  // const closePopupByEsc = (event) => {
  //   if (event.key === "Escape") {
  //     const openedPopup = document.querySelector(".popup__opened");
  //     closePopup(openedPopup);
  //   }
  // };

  // обработчик закрывающий попапы нажатием на оверлей и крестик //

  // popups.forEach((popup) =>
  //   popup.addEventListener("mousedown", (event) => {
  //     if (
  //       event.target === event.currentTarget ||
  //       event.target.classList.contains("popup__close-btn")
  //     ) {
  //       closePopup(popup);
  //     }
  //   })
  // );

  // const openImagePopup = (name, link) => {
  //   popupImage.src = link;
  //   popupImage.alt = name;
  //   popupImageCaption.textContent = name;

  //   openPopup(popupOpenPicture);
  // };

  // const addCard = (name, link) => {
  //   const card = new Card({ name, link }, ".content__template", openImagePopup);
  //   return card.createCard();
  // };

  // const handleCardFormSubmit = (event) => {
  //   event.preventDefault();
  //   const name = inputCity.value;
  //   const link = inputLink.value;
  //   const card = addCard(name, link);
  //   content.prepend(card);
  //   closePopup(popupAddCard);
  // };

  // initialCards.forEach((initialCard) => {
  //   const card = addCard(
  //     initialCard.name,
  //     initialCard.link,
  //     ".content__template",
  //     openImagePopup
  //   );
  //   content.append(card);
  // });

  // addCard();

  ///////////////////////// pr 8

  // открытие попапа при клике на изображение карточки

  const openImagePopup = new PopupWithImage(popupOpenPicture, popupImage, popupImageCaption);

  // создаем экзепляр класса Section для отрисовки карточек на странице

  const addCardToPage = new Section({
    items: initialCards, renderer: (item) => {
      // создаем экземпляр класса Card для формирования карточки
      const card = new Card(item, ".content__template", openImagePopup.open.bind(openImagePopup));
      const cardElement = card.createCard();
      addCardToPage.addItem(cardElement)
    }
  }, content);

  // добавляем отрисованную карточку в контейнер на странице

  addCardToPage.renderItems()
  openImagePopup.setEventListeners()


  // создаем экземпляр класса UserInfo
  const userInfo = new UserInfo({ nameSelector: heroName, aboutSelector: heroDescription })

  // создаем экземпляр класса PopupWithForm для попапа профиля

  const popupWithProfile = new PopupWithForm(popupEditProfile, {
    handleFormSubmit: ({ name, about }) => {
      userInfo.setUserInfo({ name, about });
      popupWithProfile.close()
    }
  })

  // функция подставляет данные пользователя в форму и открывает ее

  const openPopupWithProfile = () => {
    const data = userInfo.getUserInfo();
    const { name, about } = data;
    inputName.value = name;
    inputDescription.value = about;
    popupWithProfile.open();
  }

  popupWithProfile.setEventListeners()

  // открытие попапа редактирования профиля

  buttonEditProfile.addEventListener('click', () => {
    openPopupWithProfile()
    profileValidation.disableValidation(popupEditProfile, enableValidationConfig)
  })

  // функция, отвечает за создание новой карточки
  const handleFormCardSubmit = ({ name, link }) => {

    const card = new Card({ name, link }, ".content__template", openImagePopup.open.bind(openImagePopup));
    const cardElement = card.createCard();
    return cardElement;
    // addCardToPage.addItem(cardElement)
  }

  // создаем экземпляр класса PopupWithForm для попапа добавления карточек

  const popupWithAddCard = new PopupWithForm(popupAddCard, {
    handleFormSubmit: ({ name, link }) => {
      content.prepend(handleFormCardSubmit({ name, link }))
      popupWithAddCard.close()
    }
  })




  console.log('popupWithAddCard._getInputValues() : ', popupWithAddCard._getInputValues())

  // открытие попапа добавляния карточки

  buttonAddCard.addEventListener("click", () => {
    popupWithAddCard.open()
    addCardValidation.disableValidation(popupAddCard, enableValidationConfig);
  });

  popupWithAddCard.setEventListeners()

  // buttonAddCard.addEventListener("click", () => {
  //   const openAddCardPopup = new Popup(popupAddCard);
  //   openAddCardPopup.setEventListeners();
  //   openAddCardPopup.open();
  //   formAddCard.reset();
  //   addCardValidation.disableValidation(popupAddCard, enableValidationConfig);
  // });


  ////////////////////////

  // formProfile.addEventListener("submit", changeProfile);
  // formAddCard.addEventListener("submit", handleCardFormSubmit);

  const profileValidation = new FormValidator(enableValidationConfig, formProfile);
  const addCardValidation = new FormValidator(
    enableValidationConfig,
    formAddCard
  );

  profileValidation.enableValidation();
  addCardValidation.enableValidation();
})();
