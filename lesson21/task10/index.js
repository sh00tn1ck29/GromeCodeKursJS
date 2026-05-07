export function finishForm() {
  const formEl = document.querySelector('.login-form');

  const loginInput = document.createElement('input');
  loginInput.type = 'text';
  loginInput.name = 'login';
  formEl.prepend(loginInput);

  const passwordInput = document.querySelector('input[name="password"]');

  passwordInput.type = 'password';
}
