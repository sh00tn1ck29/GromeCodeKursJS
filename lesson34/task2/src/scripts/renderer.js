const listElem = document.querySelector('.list');

export const renderTasks = (tasksList) => {
  listElem.innerHTML = '';

  const tasksElems = [...tasksList]
    .sort((a, b) => {
      if (a.done !== b.done) {
        return a.done - b.done;
      }
      if (!a.done) {
        return new Date(b.createDate) - new Date(a.createDate);
      }
      return new Date(b.doneDate) - new Date(a.doneDate);
    })
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      // Текст задачи оборачиваем в спан для красоты и структуры
      const textElem = document.createElement('span');
      textElem.textContent = text;

      // Добавляем кнопку удаления
      const deleteBtnElem = document.createElement('button');
      deleteBtnElem.classList.add('list__item-delete-btn');
      deleteBtnElem.dataset.id = id;
      deleteBtnElem.textContent = '+'; // Или 'X', или любой символ удаления
      deleteBtnElem.style.marginLeft = 'auto'; // Сдвинет кнопку вправо

      listItemElem.append(checkbox, textElem, deleteBtnElem);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
