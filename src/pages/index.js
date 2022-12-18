import './index.css' // импорт css стилей для сборки с помощью Webpack

// константы попапов
import { popupEditProfile, popupAddCard, popupOpenPicture } from "../data/constants.js";
// константы форм
import { formProfile, formAddCard } from "../data/constants.js";
// кнопки
import { buttonEditProfile, buttonAddCard } from "../data/constants.js";
// поля (инпуты) профиля
import { inputName, inputDescription } from "../data/constants.js";
// элементы, в которых записаны данные профиля
import { heroName, heroDescription } from "../data/constants.js";
// элемент фотографии и подписи к ней в открытом попапе с изображением
import { popupImage, popupImageCaption } from "../data/constants.js";
// контейнер для добавления карточек
import { content } from "../data/constants.js";
// массив с данными дефолтных карточек
import initialCards from "../data/initialCards.js";
// объект с селекторами для работы с валидацией
import enableValidationConfig from "../data/enableValidationConfig.js";
// класс Card отвечает за рендеринг за наполнение и рендеринг карточки, установки слушателей лайков, удаления и т.п
import Card from "../components/Card.js";
// класс FormValidator отвечает установку и проверку валидации полей ввода
import FormValidator from "../components/FormValidator.js";
// класс Popup является родителем для других попап-классов, открывает, закрывает попапы, устанавливает слушатель на ESC и т.п.
import Popup from "../components/Popup.js";
// класс PopupWithImage наследуется от Popup и описывает логику открытия попапа с картинкой
import PopupWithImage from "../components/PopupWithImage.js";
// класс PopupWithForm наследуется от Popup и отписывает логику попапов профиля и добавления карточек
import PopupWithForm from "../components/PopupWithForm.js";
// класс Section отрисовывает карточки на страницу
import Section from "../components/Section.js";
// класс UserInfo отвечает за получение данных пользователя и добавляет новые значения на страницу
import UserInfo from "../components/UserInfo.js";



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


// создаем экземпляр класса UserInfo, передаем селекторы для получения объекта с данными пользователя

const userInfo = new UserInfo({ nameElement: heroName, aboutElement: heroDescription })

// создаем экземпляр класса PopupWithForm для попапа профиля

const popupWithProfile = new PopupWithForm(popupEditProfile, {
  handleFormSubmit: ({ name, about }) => {
    // берем значения input.value и передаем на страницу
    userInfo.setUserInfo({ name, about });
    popupWithProfile.close()
  }
})

// функция подставляет данные пользователя в форму и открывает ее

const openPopupWithProfile = () => {
  //добавляем данные пользователя в форму профиля
  popupWithProfile.setInputValues(userInfo.getUserInfo())
  //открываем попап формы профиля
  popupWithProfile.open();
}

// устанавливаем слушатель на попап профиля (отвечает за сабмит формы и закрытие попапа)

popupWithProfile.setEventListeners()


// открытие попапа редактирования профиля

buttonEditProfile.addEventListener('click', () => {
  openPopupWithProfile()
  profileValidation.resetValidation(popupEditProfile, enableValidationConfig)
})

// функция, отвечает за создание новой карточки

const handleFormCardSubmit = ({ name, link }) => {

  const card = new Card({ name, link }, ".content__template", openImagePopup.open.bind(openImagePopup));
  const cardElement = card.createCard();
  return cardElement;
}

// создаем экземпляр класса PopupWithForm для попапа добавления карточек

const popupWithAddCard = new PopupWithForm(popupAddCard, {
  handleFormSubmit: ({ name, link }) => {
    content.prepend(handleFormCardSubmit({ name, link }))
    popupWithAddCard.close()
  }
})

// открытие попапа добавляния карточки

buttonAddCard.addEventListener("click", () => {
  popupWithAddCard.open()
  addCardValidation.resetValidation(popupAddCard, enableValidationConfig);
});

// устанавливаем слушатель на попап профиля (отвечает за сабмит формы и закрытие попапа)

popupWithAddCard.setEventListeners();

// создаем экзепляры класса FormValidator для формы каждого попапа

const profileValidation = new FormValidator(enableValidationConfig, formProfile);
const addCardValidation = new FormValidator(
  enableValidationConfig,
  formAddCard
);

// запускаем валидацию форм

profileValidation.enableValidation();
addCardValidation.enableValidation();