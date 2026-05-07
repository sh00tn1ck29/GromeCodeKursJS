export function finishList() {
  const list = document.querySelector('.list');
  const specialItem = document.querySelector('.special');

  const item1 = document.createElement('li');
  item1.textContent = '1';
  list.prepend(item1);

  const item4 = document.createElement('li');
  item4.textContent = '4';
  specialItem.before(item4);

  const item6 = document.createElement('li');
  item6.textContent = '6';
  specialItem.after(item6);

  const item8 = document.createElement('li');
  item8.textContent = '8';
  list.append(item8);
}
