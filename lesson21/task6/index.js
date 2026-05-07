export function setButton(buttonText) {
  const bodyEl = document.querySelector('body');

  bodyEl.innerHTML = `<button>${buttonText}</button>`;
}
