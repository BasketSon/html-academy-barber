var modalMap = document.querySelector('.modal-map-overlay');
var map = modalMap.querySelector('.modal-map');
var showMapButton = document.getElementById('map-button');

function openMap(evt) {
  evt.preventDefault();
  modalMap.classList.remove('visually-hidden');
  map.classList.add('map-rotate')
}
function closeMap(evt) {
  evt.preventDefault();
  modalMap.classList.add('visually-hidden');
  map.classList.remove('map-rotate')
}


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!modalMap.classList.contains('visually-hidden')) {
      evt.preventDefault();
      modalMap.classList.add('visually-hidden');
      map.classList.remove('map-rotate')
    }
  }
})
