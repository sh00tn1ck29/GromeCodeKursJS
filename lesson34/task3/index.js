const ApiLink = 'https://6a18a2251878294b597d6a0c.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const submitButton = document.querySelector('.submit-button');

const getApiData = () => {
  return fetch(ApiLink).then((response) => response.json());
};

const setApiData = (userData) => {
  return fetch(ApiLink, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
};

const handleValidation = () => {
  const isValid = formElem.reportValidity();
  if (isValid) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
};

const addUser = (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));

  setApiData(formData).then((serverData) => {
    alert(JSON.stringify(serverData));
    formElem.reset();
    submitButton.setAttribute('disabled', 'true');
  });
};

formElem.addEventListener('input', handleValidation);
formElem.addEventListener('submit', addUser);
