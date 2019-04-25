var modalLogin = document.querySelector('.modal-login-overlay');
var modalLoginBox = modalLogin.querySelector('.modal-login');
var loginForm = modalLogin.querySelector('.modal-login-form')
var login = document.getElementById('modal-login-login');
var password = document.getElementById('modal-login-password');
var loginField = modalLogin.querySelector('#login-input-js');
var passwordField = modalLogin.querySelector('#password-input-js');

function openLogin(evt) {
  evt.preventDefault();
  modalLogin.classList.remove('visually-hidden');
  modalLoginBox.classList.add('show-login')
  if (storage) {
    login.value = storage;
    password.focus();
  }
  else {
    login.focus();
  }
}

function closeLogin(evt) {
  evt.preventDefault();
  modalLogin.classList.add('visually-hidden');
  modalLoginBox.classList.remove('show-login');
}

loginForm.addEventListener('submit', function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    if (!login.value) {
      login.placeholder = 'Введите логин';
      loginField.classList.add('input-shake');
      setTimeout(function () {
        loginField.classList.remove('input-shake');
      }, 500)
    }
    if (!password.value) {
      password.placeholder = 'Введите пароль';
      passwordField.classList.add('input-shake');
      setTimeout(function () {
        passwordField.classList.remove('input-shake');
      }, 500)
    }
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem('login', login.value);
    }
  }
})

//проверка на поддержку localStorage
var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!modalLogin.classList.contains('visually-hidden')) {
      evt.preventDefault();
      modalLogin.classList.add('visually-hidden');
      modalLoginBox.classList.remove('show-login');
    }
  }
})
