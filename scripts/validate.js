

// функция, показывающая сообщение об ошибке, когда поле становится не валидным

// const showInputError = (form, input, errorMessage, obj) => {
//   const error = form.querySelector(`.${input.id}-error`);
//   error.textContent = errorMessage;
//   error.classList.add(obj.errorClass);
//   input.classList.add(obj.inputErrorClass);
// };

// функция, скрывающая сообщение об ошибке, когда поле становится валидным

// const hideInputError = (form, input, obj) => {
//   const error = form.querySelector(`.${input.id}-error`);
//   error.classList.remove(obj.errorClass);
//   input.classList.remove(obj.inputErrorClass);
//   error.textContent = "";
// };

// функция, проверяющая инпут на валидность

// const checkInputValidity = (form, input) => {
//   if (!input.validity.valid) {
//     showInputError(
//       form,
//       input,
//       input.validationMessage,
//       enableValidationConfig
//     );
//   } else {
//     hideInputError(form, input, enableValidationConfig);
//   }
// };

// функция выключения кнопки

// const disableButton = (button, obj) => {
//   button.classList.add(obj.inactiveButtonClass);
//   button.setAttribute("disabled", true);
// };

// функция включения кнопки

// const enableButton = (button, obj) => {
//   button.classList.remove(obj.inactiveButtonClass);
//   button.removeAttribute("disabled", false);
// };

// функция, проверяющая есть ли поле не прошедшее валидацию, если возратит true значит невалид

// const hasInvalidInput = (inputs) => {
//   return inputs.some((input) => !input.validity.valid);
// };

// функция делающая кнопку неактивной если поле невалидно

// const toggleButtonState = (inputs, button, obj) => {
//   if (hasInvalidInput(inputs)) {
//     disableButton(button, obj);
//   } else {
//     enableButton(button, obj);
//   }
// };

// функция устанавливающая обработчик на поля

// const setEventListeners = (form, obj) => {
//   const inputs = [...form.querySelectorAll(obj.inputSelector)];
//   const button = form.querySelector(obj.submitButtonSelector);

//   toggleButtonState(inputs, button, obj);

//   inputs.forEach((input) => {
//     input.addEventListener("input", () => {
//       checkInputValidity(form, input);
//       toggleButtonState(inputs, button, obj);
//     });
//   });
// };

// функция, запускающая валидацию

// const enableValidation = (obj) => {
//   const forms = [...document.querySelectorAll(obj.formSelector)];
//   forms.forEach((form) => {
//     setEventListeners(form, obj);
//   });
// };

// Функция убирающая ошибку валидации у конкретного попапа

// const disableValidation = (popup, obj) => {
//   const form = popup.querySelector(obj.formSelector);
//   const inputs = [...form.querySelectorAll(obj.inputSelector)];
//   inputs.forEach((input) => {
//     hideInputError(form, input, obj);
//   });
// };



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// enableValidation(enableValidationConfig);
