export function squaredNumbers() {
  const elements = document.querySelectorAll('.number');

  elements.forEach((el) => {
    const num = Number(el.dataset.number);

    const squared = num * num;

    el.dataset.squaredNumber = squared;
  });
}
