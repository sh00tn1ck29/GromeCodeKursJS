export function getTitle() {
  titleElement = document.querySelector('.title');
  return titleElement.textContent;
}

export function getDescription() {
  descriptionEl = querySelector('.about');
  return descriptionEl.innerText;
}

export function getPlans() {
  plansElement = document.querySelector('.plans');
  return plansElement.innerHTML;
}

export function getGoal() {
  goalElement = document.querySelector('.goal');
  return goalElement.outerHTML;
}
