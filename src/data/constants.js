const popups = [...document.querySelectorAll(".popup")];

// Отдельные попапы

export const popupEditProfile = document.querySelector(".popup_type_edit-profile");
export const popupAddCard = document.querySelector(".popup_type_add-card");
export const popupOpenPicture = document.querySelector(".popup_type_open-picture");
export const popupChangeAvatar = document.querySelector(".popup_type_change-avatar");
export const popupApproveDelete = document.querySelector(".popup_type_approve-delete");

// формы попапов

export const formProfile = popupEditProfile.querySelector(".form");
export const formAddCard = popupAddCard.querySelector(".form");
export const fromChangeAvatar = popupChangeAvatar.querySelector(".form");



// кнопки

export const buttonEditProfile = document.querySelector(".hero__edit");
export const buttonAddCard = document.querySelector(".hero__add");
export const buttonChangeAvatar = document.querySelector(".hero__profile")


const buttonSaveFormProfile = popupEditProfile.querySelector(".form__save-btn");
const buttonSaveFormAddCard = popupAddCard.querySelector(".form__save-btn");
const buttonSaveFormAddAvatar = popupChangeAvatar.querySelector('.form__save-btn')

export const saveButtons = [buttonSaveFormProfile, buttonSaveFormAddCard, buttonSaveFormAddAvatar];

// поля

export const inputName = document.querySelector(".form__input_text_name");
export const inputDescription = document.querySelector(
  ".form__input_text_occupation"
);

// прочее

export const heroName = document.querySelector(".hero__name");
export const heroDescription = document.querySelector(".hero__description");
export const heroImg = document.querySelector(".hero__img");
export const popupImage = document.querySelector(".popup__image");
export const popupImageCaption = document.querySelector(".popup__image-caption");

export const content = document.querySelector(".content");

// отдельные селекторы

const inactiveButtonClass = "form__save-btn_disabled";
const inputErrorClass = "form__input_type_error";
const errorClass = "form__input-error_visible";
