export function getTitle() {
  const titleElement = document.querySelector('.title');
  return titleElement.textContent;
}

export function getDescription() {
  const descriptionEl = document.querySelector('.about');
  return descriptionEl.innerText;
}

export function getPlans() {
  const plansElement = document.querySelector('.plans');
  return plansElement.innerHTML;
}

export function getGoal() {
  const goalElement = document.querySelector('.goal');
  return goalElement.outerHTML;
}
