export function createButton(buttonText) {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = `${buttonText}`;
  const bodyEl = document.querySelector('body');
  bodyEl.append(buttonElement);
}
