const enableValidationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-btn',
  inactiveButtonClass: 'form__save-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible',
};


// функция, показывающая сообщение об ошибке, при невалидном поле
//(form, input, errorMessage, config)
const showInputError = (form, input, config) => {
  const error = form.document.querySelector(`${input.id}-error`);
  error.classList.add(config.errorClass);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
}

// функция, скрывающая сообщение об ошибке, когда поле становится валидным

const hideInputError = (form, input, config) => {
  const error = form.document.querySelector(`${input.id}-error`);
  error.classList.remove(config.errorClass);
  input.classList.remove(config.inputErrorClass);
  error.textContent = '';
}

// функция логики валидности

const hasInvalidInput = (inputs) => {
  return inputs.some(input => {
    return !input.validity.valid
  })

}

// функция, проверяющая инпут на валидность

const checkInputValidity = (form, input) => {
  if(!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config)
  } else {
    hideInputError(form, input, config)
  }
}

// функция, вешающая обработчик изменения поля ввода на все инпуты

const setEventListeners = (form, config) => {
  const inputs = [...form.querySelectorAll(config.inputSelector)];

  inputs.forEach(input => {
    input.addEventListener('input', checkInputValidity)
  })
}


// обработчик для формы инпут

const setHandlers = (form, config) => {
  const inputs = [...form.querySelectorAll(config.inputSelector)];

  inputs.forEach(input => {
    input.addEventListener('input', checkInputValidity)
  })
}



// функция в данный момент сбрасывает стандартное действие браузера

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];

  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      setEventListeners(form)
    })
  })

  // setHandlers(form, config)
}



enableValidation(enableValidationConfig);
