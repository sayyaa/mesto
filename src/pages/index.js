import "./index.css"; // импорт css стилей для сборки с помощью Webpack

// константы попапов
import {
  popupEditProfile,
  popupAddCard,
  popupOpenPicture,
  popupChangeAvatar,
  popupApproveDelete
} from "../data/constants.js";
// константы форм
import { formProfile, formAddCard, fromChangeAvatar } from "../data/constants.js";
// кнопки
import { buttonEditProfile, buttonAddCard, buttonChangeAvatar } from "../data/constants.js";
// поля (инпуты) профиля
import { inputName, inputDescription } from "../data/constants.js";
// элементы, в которых записаны данные профиля
import { heroName, heroDescription } from "../data/constants.js";
// элемент изображения профиля
import { heroImg } from "../data/constants.js";
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
//
import PopupWithApproveDeleteCard from "../components/PopupWithApproveDeleteCard.js";

// открытие попапа при клике на изображение карточки

const openImagePopup = new PopupWithImage(
  popupOpenPicture,
  popupImage,
  popupImageCaption
);

// функция создания наполненной карточки

// const generateCard = (item) => {
//   // создаем экземпляр класса Card для формирования карточки
//   const card = new Card(
//     item,
//     ".content__template",
//     openImagePopup.open.bind(openImagePopup)
//   );
//   const cardElement = card.createCard();
//   return cardElement;
// };

// создаем экзепляр класса Section для отрисовки карточек на странице

const addCardToPage = new Section(
  (item) => {
    const cardElement = generateCard(item);
    addCardToPage.addItem(cardElement);
  },
  content
);

// получаем объект с карточкой (item)
// addCardToPage.renderItems();
// устанавливаем слушатель на попап
openImagePopup.setEventListeners();

// создаем экземпляр класса UserInfo, передаем селекторы для получения объекта с данными пользователя

const userInfo = new UserInfo({
  nameElement: heroName,
  aboutElement: heroDescription,
  avatarElement: heroImg,
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

// // экземпляр PopupWithForm для попапа с карточками

// const popupWithAddCard = new PopupWithForm(popupAddCard, {
//   handleFormSubmit: (item) => {
//     const card = generateCard(item);
//     addCardToPage.addItem(card);
//     popupWithAddCard.close();
//   },
// });

// // открытие попапа добавляния карточки

// buttonAddCard.addEventListener("click", () => {
//   popupWithAddCard.open();
//   // сбрасываем валидацию, чтобы при добавлении второй и последуюших карточек кнопка сабмита была неактивной
//   formValidators["formAddCard"].resetValidation();
// });

// // устанавливаем слушатель на попап профиля (отвечает за сабмит формы и закрытие попапа)

// popupWithAddCard.setEventListeners();

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

// создаем экземпляр класса Api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57",
  headers: {
    authorization: "92fe6ed7-0e7c-46b8-933e-0c04fe04b6bf",
    "Content-Type": "application/json",
  },
});

// создаем экземпляр класса PopupWithForm для попапа открытия профиля

const popupWithProfile = new PopupWithForm(popupEditProfile, {
  handleFormSubmit: ({ name, about }) => {
    api.editProfileData({ name, about })
      .then(({ name, about }) => {
        console.log({name, about})
        userInfo.setUserInfo({ name, about });
        popupWithProfile.close();
      })
      .catch((error) => console.log(error))
  }
});

// устанавливаем обработчик, в том числе для получения параметров колбэка handleFormSubmit
popupWithProfile.setEventListeners()

// функция открытия попапа профиля и получения данных

const openPopupWithProfile = () => {
  //добавляем данные пользователя в форму профиля
  const obj = userInfo.getUserInfo();
  popupWithProfile.setInputValues(obj);
  //открываем попап формы профиля
  popupWithProfile.open();
};

// создаем экземпляр класса PopupWithForm для попапа изменения аватара

const popupWithChangeAvatar = new PopupWithForm(popupChangeAvatar, {
  handleFormSubmit: (data) => {
    api.setProfileAvatar(data)
      .then(() => {
        userInfo.addAvatar(data.link);
        popupWithChangeAvatar.close();
      })
      .catch(err => console.log(err))
  }
});

// слушатель кнопки редактирования аватара

buttonChangeAvatar.addEventListener('click', () => {
  popupWithChangeAvatar.open();
  formValidators["formChangeAvatar"].resetValidation();
})

// установка слушателя, в том числе получение параметра handleFormSubmit

popupWithChangeAvatar.setEventListeners()

// создаем экземпляр класса PopupWithApproveDeleteCard для попапа с подтверждением удаления карточки

const popupWithApproveDeleteCard = new PopupWithApproveDeleteCard(popupApproveDelete, {
  handleSubmit: (cardId, currentCard) => {
    api.deleteCards(cardId).then(() => {
      currentCard.delete();
      popupWithApproveDeleteCard.close()
    }).catch(err => console.log(err))
  }
})

// устаналиваем слушатель, получаем cardId, currentCard
popupWithApproveDeleteCard.setEventListeners()

// основная логика карточки

const generateCard = (data) => {
  // создаем экземпляр класса Card для формирования карточки
  const card = new Card(
    { ...data, userId },
    ".content__template",
    openImagePopup.open.bind(openImagePopup),
    (cardId, currentCard) => {
      popupWithApproveDeleteCard.open(cardId, currentCard);
    },
    (cardId, currentCard, likes, isLiked) => {
      if (!isLiked) {
        api.setLike(cardId).then(({ likes }) => {
          currentCard.toggleLike(likes.length)
        })
      } else {
        api.removeLike(cardId).then(({ likes }) => {
          currentCard.toggleLike(likes.length)
        })
      }
    }
  );
  const cardElement = card.createCard();
  return cardElement;
};

// экземпляр PopupWithForm для попапа с карточками

const popupWithAddCard = new PopupWithForm(popupAddCard, {
  handleFormSubmit: (data) => {
    api.addNewCard(data)
      .then(data => {
        const card = generateCard(data);
        addCardToPage.addItem(card);
        popupWithAddCard.close();
      }).catch(err => console.log(err))
  },
});

// устанавливаем слушатель на попап профиля (отвечает за сабмит формы и закрытие попапа) и получение data

popupWithAddCard.setEventListeners();

// открытие попапа добавляния карточки

buttonAddCard.addEventListener("click", () => {
  popupWithAddCard.open();
  // сбрасываем валидацию, чтобы при добавлении второй и последуюших карточек кнопка сабмита была неактивной
  formValidators["formAddCard"].resetValidation();
});



// массив, где хранятся промисы профиля и карточек
const profileAndCardsData = [api.getUserData(), api.getInitialCards()];

// объявляем userId
let userId = '';

// выполнение промисов
Promise.all(profileAndCardsData)
  .then(([profileData, cardsData]) => {

    userInfo.setUserInfo(profileData);
    // console.log(userInfo.setUserInfo(profileData))
  // console.log(userInfo.setUserInfo({profileData}))
  // console.log({profileData})

    userInfo.addAvatar(profileData.avatar)

    userId = profileData._id;

    addCardToPage.renderItems(cardsData.reverse());
  }).catch(err => console.log(err))
