!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function e(t){var n=this,i=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"getProfile",(function(){return fetch("".concat(n.baseUrl,"/users/me/"),{headers:n.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))})),r(this,"getInitialCards",(function(){return fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))})),r(this,"updateProfile",(function(e,t){return fetch("".concat(n.baseUrl,"/users/me/"),{method:"PATCH",headers:n.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))})),r(this,"updateAvatar",(function(e){return fetch("".concat(n.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:n.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))})),r(this,"addCard",(function(e,t){return fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:n.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))})),r(this,"deleteCard",(function(e){return fetch("".concat(n.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:n.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))})),r(this,"addLike",(function(e){return fetch("".concat(n.baseUrl,"/cards/like/").concat(e),{method:"PUT",headers:n.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))})),r(this,"removeLike",(function(e){return fetch("".concat(n.baseUrl,"/cards/like/").concat(e),{method:"DELETE",headers:n.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))})),this.baseUrl=i,this.headers=o};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"addLike",(function(e){i.api.addLike(i.id).then((function(t){e.target.classList.add("place-card__like-icon_liked"),i.likeCounter.textContent=t.likes.length})).catch((function(e){return console.log(e)}))})),a(this,"removeLike",(function(e){i.api.removeLike(i.id).then((function(t){e.target.classList.remove("place-card__like-icon_liked"),i.likeCounter.textContent=t.likes.length})).catch((function(e){return console.log(e)}))})),a(this,"likeHandler",(function(e){e.target.classList.contains("place-card__like-icon_liked")?i.removeLike(e):i.addLike(e)})),a(this,"remove",(function(){window.confirm("Вы действительно хотите цдалить эту карточку?")&&i.api.deleteCard(i.id).then((function(){i.cardElement.remove()})).catch((function(e){return console.log(e)}))})),this.cardsArray=t,this.image=this.cardsArray.link,this.name=this.cardsArray.name,this.increaseImage=n,this.id=this.cardsArray._id,this.likes=this.cardsArray.likes,this.owner=this.cardsArray.owner._id,this.api=r}var t,n,r;return t=e,(n=[{key:"create",value:function(){var e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("button"),r=document.createElement("div"),i=document.createElement("h3"),o=document.createElement("div"),a=document.createElement("span"),c=document.createElement("button");return e.classList.add("place-card"),e.setAttribute("id",this.id),t.classList.add("place-card__image"),t.style.backgroundImage="url(".concat(this.image,")"),t.style.cursor="pointer",n.classList.add("place-card__delete-icon"),"4b286c9d349ccf6c5fec0201"!==this.owner&&(n.style.display="none"),r.classList.add("place-card__description"),i.classList.add("place-card__name"),i.textContent=this.name,o.classList.add("place-card__like-container"),a.classList.add("place-card__like-counter"),a.textContent=this.likes.length,c.classList.add("place-card__like-icon"),this.likes.forEach((function(e){"4b286c9d349ccf6c5fec0201"==e._id&&c.classList.add("place-card__like-icon_liked")})),t.appendChild(n),o.appendChild(c),o.appendChild(a),r.appendChild(i),r.appendChild(o),e.appendChild(t),e.appendChild(r),this.cardElement=e,this.cardImage=t,this.likeCounter=a,this.cardButtonLike=c,this.setEventListeners(),e}},{key:"setEventListeners",value:function(e){this.cardElement.querySelector(".place-card__like-icon").addEventListener("click",this.likeHandler),this.cardElement.querySelector(".place-card__delete-icon").addEventListener("click",this.remove),this.cardImage.addEventListener("click",this.increaseImage)}}])&&o(t.prototype,n),r&&o(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.api=n,this.addInitialCards=r}var t,n,r;return t=e,(n=[{key:"addCard",value:function(e){this.container.appendChild(e)}},{key:"render",value:function(){var e=this;this.api.getInitialCards().then((function(t){for(var n=0;n<t.length;n++)e.addCard(e.addInitialCards(t[n]))})).catch((function(e){return console.log(e)}))}}])&&s(t.prototype,n),r&&s(t,r),e}();function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"checkInputValidity",(function(e){return"INPUT"!==e.tagName||(e.setCustomValidity(""),e.validity.valueMissing?(e.setCustomValidity("Это обязательное поле"),!1):e.validity.tooShort||e.validity.tooLong?(e.setCustomValidity("Должно быть от 2 до 30 символов"),!1):e.validity.typeMismatch&&"url"===e.type?(e.setCustomValidity("Здесь должна быть ссылка"),!1):e.checkValidity())})),l(this,"checkCustomValidity",(function(e){var t=e.nextElementSibling,r=n.checkInputValidity(e);return t.textContent=e.validationMessage,r})),l(this,"setSubmitButtonState",(function(e,t){t?(e.removeAttribute("disabled"),e.classList.add("popup__button_active"),e.classList.remove("popup__button_disabled")):(e.setAttribute("disabled",""),e.classList.add("popup__button_disabled"),e.classList.remove("popup__button_active"))})),l(this,"setEventListeners",(function(e){n.container.addEventListener("input",n.checkValidation)})),l(this,"checkValidation",(function(e){e.preventDefault();var t=n.container.querySelector(".button"),r=Array.from(n.container.elements);n.checkCustomValidity(e.target),r.every(n.checkInputValidity)?n.setSubmitButtonState(t,!0):n.setSubmitButtonState(t,!1)})),this.container=t};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"setEventListeners",(function(e){r.container.querySelector(".popup__close").addEventListener("click",r.closeClickHandler),r.container.closest("body").addEventListener("keyup",r.closeClickHandlerByKey)})),f(this,"destroyEventListeners",(function(){r.container.closest("body").removeEventListener("keyup",r.closeClickHandlerByKey),r.container.querySelector(".popup__close").removeEventListener("click",r.closeClickHandler)})),f(this,"closeClickHandler",(function(){r.onClose&&r.onClose(),r.close(),r.destroyEventListeners()})),f(this,"closeClickHandlerByKey",(function(e){"Escape"===e.code&&r.closeClickHandler()})),f(this,"open",(function(){r.container.classList.add("popup_is-opened"),r.setEventListeners(event)})),f(this,"close",(function(){r.container.classList.remove("popup_is-opened"),r.destroyEventListeners()})),this.container=t,this.onClose=n};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"setUserInfo",(function(){r.api.getProfile().then((function(e){r.container.querySelector(".user-info__name").textContent=e.name,r.container.querySelector(".user-info__job").textContent=e.about,r.container.querySelector(".user-info__photo").style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){return console.log(e)}))})),p(this,"updateUserInfo",(function(e,t){r.container.querySelector(".user-info__name").textContent=e,r.container.querySelector(".user-info__job").textContent=t})),p(this,"updateAvatar",(function(e){r.container.querySelector(".user-info__photo").style.backgroundImage="url(".concat(e,")")})),this.container=t,this.api=n};!function(){var e=new i({baseUrl:"".concat("https://praktikum.tk","/cohort11"),headers:{authorization:"edfcd44f-5530-4ce9-877d-55e05dc9806d","Content-Type":"application/json"}}),t=document.forms.new,n=document.forms.newProfile,r=document.forms.newAvatar,o=document.getElementById("card"),a=document.getElementById("profile"),s=document.getElementById("avatar"),l=document.getElementById("image"),f=document.querySelector(".places-list"),p=document.querySelector(".user-info__button"),v=document.querySelector(".user-info__profile-button"),y=document.querySelector(".user-info__photo"),b=function(e){if(e.target.classList.contains("place-card__image")){var t=e.target.style.backgroundImage.slice(5,-2);l.querySelector(".popup__image").setAttribute("src",t),P.open(),P.setEventListeners(e)}},_=function(e,t){t?(e.querySelector(".popup__button-name").classList.add("popup__button-name_hidden"),e.querySelector(".popup__button-load-name").classList.add("popup__button-load-name_visible")):(e.querySelector(".popup__button-load-name").classList.remove("popup__button-load-name_visible"),e.querySelector(".popup__button-name").classList.remove("popup__button-name_hidden"))},k=function(e){var t=e.querySelector(".popup__button");t.classList.add("popup__button_disabled"),t.setAttribute("disabled","")},g=function(e){var t=e.querySelector(".popup__button");t.setAttribute("disabled",""),t.classList.remove("popup__button_active")},L=function(e){e.querySelectorAll(".error").forEach((function(e){return e.textContent=""}))},C=new u(f,e,(function(t){return new c(t,b,e).create()}));C.render();var E=new m(document.querySelector(".profile"),e);E.setUserInfo();var S=new h(o,(function(){L(o),t.reset(),g(o)})),w=new h(a,(function(){L(a),n.reset(),g(a)})),j=new h(s,(function(){L(s),r.reset(),g(s)})),P=new h(l);new d(n).setEventListeners(event),new d(t).setEventListeners(),new d(r).setEventListeners(),t.addEventListener("submit",(function(n){n.preventDefault();var r=t.elements.name.value,i=t.elements.link.value;_(o,!0),e.addCard(r,i).then((function(t){var n=new c(t,b,e);C.addCard(n.create())})).then((function(){g(o),t.reset(),S.close()})).catch((function(e){return console.log(e)})).finally((function(){return _(o,!1)}))})),n.addEventListener("submit",(function(t){t.preventDefault();var r=n.elements.fullname.value,i=n.elements.information.value;_(a,!0),e.updateProfile(r,i).then((function(e){E.updateUserInfo(e.name,e.about)})).then((function(){n.reset(),w.close(),g(a)})).catch((function(e){return console.log(e)})).finally((function(){return _(a,!1)}))})),r.addEventListener("submit",(function(t){t.preventDefault();var n=r.elements.link.value;_(s,!0),e.updateAvatar(n).then((function(e){E.updateAvatar(e.avatar)})).then((function(){r.reset(),g(s),j.close()})).catch((function(e){return console.log(e)})).finally((function(){return _(s,!1)}))})),p.addEventListener("click",(function(e){S.open(),k(o),t.reset()})),v.addEventListener("click",(function(e){w.open(),k(a),n.fullname.value=document.querySelector(".user-info__name").textContent,n.information.value=document.querySelector(".user-info__job").textContent})),y.addEventListener("click",(function(e){j.open(),k(s),r.reset()}))}()}]);