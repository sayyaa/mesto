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
// const showInputError = (form, input, errorMessage) => {
//   const error = form.querySelector(`.${input.id}-error`);
//   error.classList.add(enableValidationConfig.errorClass);
//   error.textContent = errorMessage;
//   input.classList.add(enableValidationConfig.inputErrorClass);
// }

const showInputError = (form, input, errorMessage, config) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.textContent = errorMessage;
  error.classList.add(config.errorClass);
  input.classList.add(config.inputErrorClass);
}


// функция, скрывающая сообщение об ошибке, когда поле становится валидным

const hideInputError = (form, input, config) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.classList.remove(config.errorClass);
  input.classList.remove(config.inputErrorClass);
  error.textContent = '';
}


// функция, проверяющая инпут на валидность

const checkInputValidity = (form, input) => {
  if(!input.validity.valid) {
    showInputError(form, input, input.validationMessage, enableValidationConfig)
  } else {
    hideInputError(form, input, enableValidationConfig)
  }
}

const hasInvalidInput = (inputs) => {
  return inputs.some(input => !input.validity.valid)
}

const toggleButtonState = (inputs, button, config) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', true);
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled', true);
  }
}


const setEventListeners = (form, config) => {
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  const button = form.querySelector(config.submitButtonSelector)

  toggleButtonState(inputs, button, config);


  inputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input);
      toggleButtonState(inputs, button, config);
    })
  })

}

// функция в данный момент сбрасывает стандартное действие браузера

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];

  forms.forEach(form => {
    form.addEventListener('submit', () => {

      const fieldsets = [...form.querySelectorAll('.form__set')];
      fieldsets.forEach(fieldset => setEventListeners(fieldset, enableValidationConfig))
      })
      setEventListeners(form, enableValidationConfig)
    })

  }

enableValidation(enableValidationConfig);





