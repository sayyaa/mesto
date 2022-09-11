const enableValidationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

// функция, показывающая сообщение об ошибке, когда поле становится не валидным

const showInputError = (
  form,
  input,
  errorMessage,
  { errorClass, inputErrorClass }
) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.textContent = errorMessage;
  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
};

// функция, скрывающая сообщение об ошибке, когда поле становится валидным

const hideInputError = (form, input, { errorClass, inputErrorClass }) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
  error.textContent = "";
};

// функция, проверяющая инпут на валидность

const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showInputError(
      form,
      input,
      input.validationMessage,
      enableValidationConfig
    );
  } else {
    hideInputError(form, input, enableValidationConfig);
  }
};

// функция выключения кнопки

const disableButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.setAttribute("disabled", true);
};

// функция включения кнопки

const enableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute("disabled", false);
};

// функция, проверяющая есть ли поле не прошедшее валидацию, если возратит true значит невалид

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => !input.validity.valid);
};

// функция делающая кнопку неактивной если поле невалидно

const toggleButtonState = (inputs, button) => {
  if (hasInvalidInput(inputs)) {
    disableButton(button, enableValidationConfig);
  } else {
    enableButton(button, enableValidationConfig);
  }
};

// функция устанавливающая обработчик на поля

const setEventListeners = (form, { inputSelector, submitButtonSelector }) => {
  const inputs = [...form.querySelectorAll(inputSelector)];
  const button = form.querySelector(submitButtonSelector);

  toggleButtonState(inputs, button);

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(form, input);
      toggleButtonState(inputs, button);
    });
  });
};

// функция, запускающая валидацию

const enableValidation = ({ formSelector }) => {
  const forms = [...document.querySelectorAll(formSelector)];
  forms.forEach((form) => {
    setEventListeners(form, enableValidationConfig);
  });
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
});
