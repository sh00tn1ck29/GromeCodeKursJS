export function getSection(num) {
  const spanEl = document.querySelector(`span[data-number="${num}"]`);

  const parentBox = spanEl.closest('.box');

  return parentBox.dataset.section;
}
