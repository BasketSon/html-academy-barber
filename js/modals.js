var modalMap = document.querySelector('.modal-map-overlay');
var modalLogin = document.querySelector('.modal-login-overlay')
var showMapButton = document.querySelector('#map-button');


function openMap(evt) {

  evt.preventDefault();
  modalMap.classList.remove('visually-hidden')
}

function closeMap(evt) {
  modalMap.classList.add('visually-hidden')
}

function openLogin(evt) {

  evt.preventDefault();
  modalLogin.classList.remove('visually-hidden')
}

function closeLogin(evt) {
  modalLogin.classList.add('visually-hidden')
}
