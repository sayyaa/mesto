import "./index.css"; // импорт css стилей для сборки с помощью Webpack

// константы попапов
import {
  popupEditProfile,
  popupAddCard,
  popupOpenPicture,
} from "../data/constants.js";
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
// класс Api отвечает за получение данных от сервера
import Api from "../components/Api";

// открытие попапа при клике на изображение карточки

const openImagePopup = new PopupWithImage(
  popupOpenPicture,
  popupImage,
  popupImageCaption
);

// функция создания наполненной карточки

const generateCard = (item) => {
  // создаем экземпляр класса Card для формирования карточки
  const card = new Card(
    item,
    ".content__template",
    openImagePopup.open.bind(openImagePopup)
  );
  const cardElement = card.createCard();
  return cardElement;
};

// создаем экзепляр класса Section для отрисовки карточек на странице

const addCardToPage = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = generateCard(item);
      addCardToPage.addItem(cardElement);
    },
  },
  content
);

// получаем объект с карточкой (item)
addCardToPage.renderItems();
// устанавливаем слушатель на попап
openImagePopup.setEventListeners();

// создаем экземпляр класса UserInfo, передаем селекторы для получения объекта с данными пользователя

const userInfo = new UserInfo({
  nameElement: heroName,
  aboutElement: heroDescription,
});

// создаем экземпляр класса PopupWithForm для попапа профиля

// const popupWithProfile = new PopupWithForm(popupEditProfile, {
//   handleFormSubmit: ({ name, about }) => {
//     // берем значения input.value и передаем на страницу
//     userInfo.setUserInfo({ name, about });
//     popupWithProfile.close()
//   }
// })

// функция подставляет данные пользователя в форму и открывает ее

// const openPopupWithProfile = () => {
//   //добавляем данные пользователя в форму профиля
//   const obj = userInfo.getUserInfo();
//   popupWithProfile.setInputValues(obj)
//   //открываем попап формы профиля
//   popupWithProfile.open();
// }

// устанавливаем слушатель на попап профиля (отвечает за сабмит формы и закрытие попапа)

// popupWithProfile.setEventListeners()

// открытие попапа редактирования профиля

buttonEditProfile.addEventListener("click", () => {
  openPopupWithProfile();
  // сбрасываем валидацию у попапа профиля, чтобы при его открытии кнопка сабмита была активна
  formValidators["formChangeProfile"].resetValidation();
});

// экземпляр PopupWithForm для попапа с карточками

const popupWithAddCard = new PopupWithForm(popupAddCard, {
  handleFormSubmit: (item) => {
    const card = generateCard(item);
    addCardToPage.addItem(card);
    popupWithAddCard.close();
  },
});

// открытие попапа добавляния карточки

buttonAddCard.addEventListener("click", () => {
  popupWithAddCard.open();
  // сбрасываем валидацию, чтобы при добавлении второй и последуюших карточек кнопка сабмита была неактивной
  formValidators["formAddCard"].resetValidation();
});

// устанавливаем слушатель на попап профиля (отвечает за сабмит формы и закрытие попапа)

popupWithAddCard.setEventListeners();

// объект formValidators содержит экземпляры класса FormValidator всех форм на странице
const formValidators = {};

// функция enableValidation ищет все формы со страницы, на каждую из них создаем экземпляр класса FormValidator и добавляет в объект formValidators. В данном случаем будет {formChangeProfile: FormValidator, formAddCard: FormValidator}

const enableValidation = (config) => {
  const formList = [...document.querySelectorAll(config.formSelector)];

  formList.forEach((formElement) => {
    // для каждой формы создаем экземпляр класса (validator)
    const validator = new FormValidator(config, formElement);
    // получаем имя каждой формы по ее атрибуту
    const formName = formElement.getAttribute("name");
    // записывает имя как ключ в объект, его значением будет экземпляр класса
    formValidators[formName] = validator;
    //включаем валидацию
    validator.enableValidation();
  });
};

// передаем объект в функцию и вызываем ее
enableValidation(enableValidationConfig);

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57",
  headers: {
    authorization: "92fe6ed7-0e7c-46b8-933e-0c04fe04b6bf",
    "Content-Type": "application/json",
  },
});
// const userInfo = new UserInfo({ nameElement: heroName, aboutElement: heroDescription })

// Promise.resolve(api.getUserData()).then(res => console.log(res)).catch(err => console.log(err))

// const popupWithProfile = new PopupWithForm(popupEditProfile, {
//   handleFormSubmit: ({ name, about }) => {
//     api.editeProfileData({ name, about })
//       .then(({ name, about }) => {
//         userInfo.setUserInfo({ name, about });
//         popupWithProfile.close();
//       })
//       .catch((err) => console.log(err));
//   },
// });

const popupWithProfile = new PopupWithForm(popupEditProfile, {
  handleFormSubmit: ({name, about}) => {
      api.editProfileData({ name, about })
      .then(({ name, about }) => {
        userInfo.setUserInfo({ name, about });
        popupWithProfile.close();
      })
      .catch((error) => console.log(error))
    }
  }
);

popupWithProfile.setEventListeners()
const openPopupWithProfile = () => {
  //добавляем данные пользователя в форму профиля
  const obj = userInfo.getUserInfo();
  popupWithProfile.setInputValues(obj);
  //открываем попап формы профиля
  popupWithProfile.open();
};




api
  .getUserData()
  .then((res) => userInfo.setUserInfo(res))
  .catch((err) => console.log(err));


  // api.getInitialCards()
// const generateCard = (item) => {
//   // создаем экземпляр класса Card для формирования карточки
//   const card = new Card(item, ".content__template", openImagePopup.open.bind(openImagePopup));
//   const cardElement = card.createCard();
//   return cardElement
// }

// // создаем экзепляр класса Section для отрисовки карточек на странице

// const addCardToPage = new Section({
//   items: initialCards, renderer: (item) => {
//     const cardElement = generateCard(item)
//     addCardToPage.addItem(cardElement)
//   }
// }, content);

//   .then(console.log(res))
// const pageData = [api.getUserData(), api.getInitialCards()];
// Promise.all(pageData)
//   then()

// console.log(api.getUserData())
// console.log(api.getInitisalCards().then(res => console.log(res)))
// console.log(api.editeProfileData({name: 'fedor', about: 'kurlik'}))
// console.log(api.addNewCard({name: 'site', link: 'http://www.kurlik.ru'}))
