(()=>{"use strict";var t={};function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.p="",function(t){if(Array.isArray(t))return e(t)}(n=document.querySelectorAll(".popup"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var n,r=document.querySelector(".popup_type_edit-profile"),o=document.querySelector(".popup_type_add-card"),i=document.querySelector(".popup_type_open-picture"),u=document.querySelector(".popup_type_change-avatar"),a=document.querySelector(".popup_type_approve-delete"),c=(r.querySelector(".form"),o.querySelector(".form"),u.querySelector(".form"),document.querySelector(".hero__edit")),l=document.querySelector(".hero__add"),s=document.querySelector(".hero__profile"),f=[r.querySelector(".form__save-btn"),o.querySelector(".form__save-btn"),u.querySelector(".form__save-btn")],y=(document.querySelector(".form__input_text_name"),document.querySelector(".form__input_text_occupation"),document.querySelector(".hero__name")),p=document.querySelector(".hero__description"),m=document.querySelector(".hero__img"),h=document.querySelector(".popup__image"),d=document.querySelector(".popup__image-caption"),b=document.querySelector(".content");t.p,t.p,t.p,t.p,t.p;t.p;function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var g=function(){function t(e,n,r,o,i,u){var a=this,c=e.name,l=e.link,s=e._id,f=e.owner,y=e.likes;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=c,this._link=l,this._cardId=s,this._userId=n,this._ownerId=f._id,this._likes=y,this._templateSelector=r,this._handleCardClick=o,this._handleDeleteIconClick=i,this._handleLikeClick=u,this._isLiked=this._likes.some((function(t){return t._id===a._userId}))}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".content__card").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._contentCardName=this._element.querySelector(".content__card-name"),this._contentImage.src=this._link,this._contentCardName.textContent=this._name,this._contentImage.alt="Изображение: ".concat(this._name),this._ownerId!==this._userId&&this._contentBin.remove(),this._likeCounter.textContent=this._likes.length,this._isLiked&&this._contentLike.classList.add("content__like_active"),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._contentBin=this._element.querySelector(".content__bin"),this._contentBin.addEventListener("click",(function(){t._handleDeleteIconClick(t._cardId,t)})),this._contentLike=this._element.querySelector(".content__like"),this._likeCounter=this._element.querySelector(".content__like-counter"),this._contentLike.addEventListener("click",(function(e){t._handleLikeClick(t._cardId,t,t._likes,t._isLiked),t._isLiked=!t._isLiked})),this._contentImage=this._element.querySelector(".content__img"),this._contentImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"toggleLikeButtoncondition",value:function(){this._contentLike.classList.toggle("content__like_active")}},{key:"toggleLikesCount",value:function(t){this._likeCounter.textContent=t}},{key:"delete",value:function(){this._element.remove()}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,E(r.key),r)}}function E(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}const j=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e,n){(e=E(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._button.classList.add(r._obj.inactiveButtonClass),r._button.setAttribute("disabled",!0)):(r._button.classList.remove(r._obj.inactiveButtonClass),r._button.removeAttribute("disabled",!1))})),this._obj=e,this._form=n,this._inputs=function(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this._form.querySelectorAll(this._obj.inputSelector)),this._button=this._form.querySelector(this._obj.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));n.textContent=e,n.classList.add(this._obj.errorClass),t.classList.add(this._obj.inputErrorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));e.classList.remove(this._obj.errorClass),t.classList.remove(this._obj.inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"enableValidation",value:function(){var t=this;this._toggleButtonState(),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._inputs.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=e,this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("mousedown",(function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-btn"))&&t.close()}))}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=T(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function T(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function R(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return R(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._popupImage=e,r._popupImageCaption=n,r}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupImageCaption.textContent=t,A(U(u.prototype),"open",this).call(this)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=F(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},N.apply(this,arguments)}function F(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function $(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(r);if(o){var n=J(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return $(this,t)});function u(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n._form=n._popupElement.querySelector(".form"),n._inputList=function(t){return function(t){if(Array.isArray(t))return D(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n._form.querySelectorAll(".form__input")),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;N(J(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){N(J(u.prototype),"close",this).call(this),this._form.reset()}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}var K=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Q(o)?o:String(o)),r)}var o}var X=function(){function t(e){var n=e.nameElement,r=e.aboutElement,o=e.avatarElement;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=n,this._aboutElement=r,this._avatarElement=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userData={},this._userData.name=this._nameElement.textContent,this._userData.about=this._aboutElement.textContent,this._userData}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._nameElement.textContent=e,this._aboutElement.textContent=n}},{key:"addAvatar",value:function(t){this._avatarElement.src=t}},{key:"setUserId",value:function(t){this._userId=t}},{key:"getUserId",value:function(){return this._userId}}])&&W(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Y(o)?o:String(o)),r)}var o}var tt=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_getPromise",value:function(t){return t.ok?t.json():Promise.reject("Ошибочка вышла: ".concat(t.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._getPromise)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._getPromise)}},{key:"editProfileData",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._getPromise)}},{key:"setProfileAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.link})}).then(this._getPromise)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._getPromise)}},{key:"deleteCards",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._getPromise)}},{key:"setLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._getPromise)}},{key:"removeLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getPromise)}}])&&Z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==et(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==et(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===et(o)?o:String(o)),r)}var o}function rt(){return rt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=ot(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},rt.apply(this,arguments)}function ot(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=at(t)););return t}function it(t,e){return it=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},it(t,e)}function ut(t,e){if(e&&("object"===et(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function at(t){return at=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},at(t)}var ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&it(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=at(r);if(o){var n=at(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ut(this,t)});function u(t,e){var n,r=e.handleSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmit=r,n._removeButton=document.querySelector(".popup__remove-btn"),n}return e=u,(n=[{key:"open",value:function(t,e){rt(at(u.prototype),"open",this).call(this),this._cardId=t,this._currentCard=e}},{key:"setEventListeners",value:function(){var t=this;rt(at(u.prototype),"setEventListeners",this).call(this),this._removeButton.addEventListener("click",(function(){t._handleSubmit(t._cardId,t._currentCard)}))}}])&&nt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function lt(t,e){if(t){if("string"==typeof t)return st(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?st(t,e):void 0}}function st(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var ft=new B(i,h,d),yt=new K((function(t){var e=wt(t);yt.addItem(e)}),b);ft.setEventListeners();var pt=new X({nameElement:y,aboutElement:p,avatarElement:m});c.addEventListener("click",(function(){_t(),ht.formChangeProfile.resetValidation()}));var mt,ht={};mt={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save-btn",inactiveButtonClass:"form__save-btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"},function(t){return function(t){if(Array.isArray(t))return st(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||lt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(document.querySelectorAll(mt.formSelector)).forEach((function(t){var e=new j(mt,t),n=t.getAttribute("name");ht[n]=e,e.enableValidation()}));var dt=new tt({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-57",headers:{authorization:"92fe6ed7-0e7c-46b8-933e-0c04fe04b6bf","Content-Type":"application/json"}}),bt=function(t){f.forEach((function(e){e.textContent=t?"Секунду, идет сохранение...":"Сохранить"}))},vt=new H(r,{handleFormSubmit:function(t){var e=t.name,n=t.about;bt(!0),dt.editProfileData({name:e,about:n}).then((function(t){var e=t.name,n=t.about;pt.setUserInfo({name:e,about:n}),vt.close()})).catch((function(t){return console.log(t)})).finally((function(){return bt(!1)}))}});vt.setEventListeners();var _t=function(){var t=pt.getUserInfo();vt.setInputValues(t),vt.open()},gt=new H(u,{handleFormSubmit:function(t){bt(!0),dt.setProfileAvatar(t).then((function(){pt.addAvatar(t.link),gt.close()})).catch((function(t){return console.log(t)})).finally((function(){return bt(!1)}))}});s.addEventListener("click",(function(){gt.open(),ht.formChangeAvatar.resetValidation()})),gt.setEventListeners();var St=new ct(a,{handleSubmit:function(t,e){dt.deleteCards(t).then((function(){e.delete(),St.close()})).catch((function(t){return console.log(t)}))}});St.setEventListeners();var wt=function(t){return new g(t,pt.getUserId(),".content__template",ft.open.bind(ft),(function(t,e){St.open(t,e)}),(function(t,e,n,r){r?dt.removeLike(t).then((function(t){var n=t.likes;e.toggleLikesCount(n.length),e.toggleLikeButtoncondition()})).catch((function(t){return console.log(t)})):dt.setLike(t).then((function(t){var n=t.likes;e.toggleLikesCount(n.length),e.toggleLikeButtoncondition()})).catch((function(t){return console.log(t)}))})).createCard()},kt=new H(o,{handleFormSubmit:function(t){bt(!0),dt.addNewCard(t).then((function(t){var e=wt(t);yt.addItem(e),kt.close()})).catch((function(t){return console.log(t)})).finally((function(){return bt(!1)}))}});kt.setEventListeners(),l.addEventListener("click",(function(){kt.open(),ht.formAddCard.resetValidation()}));var Et=[dt.getUserData(),dt.getInitialCards()];Promise.all(Et).then((function(t){var e=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||lt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),n=e[0],r=e[1];pt.setUserId(n._id),pt.setUserInfo(n),console.log("aaa",r),yt.renderItems(r.reverse()),pt.addAvatar(n.avatar)})).catch((function(t){return console.log(t)}))})();