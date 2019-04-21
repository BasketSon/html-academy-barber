var modalMap = document.querySelector('section.modal-map');
var modalLogin = document.querySelector('section.modal-login')
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
