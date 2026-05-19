const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');
const createButton = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id; // Добавляем ID, чтобы знать, какую задачу кликнули
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const createTaskHandler = () => {
  const text = taskInput.value;
  if (!text) return;

  tasks.push({
    text,
    done: false,
    id: Math.random(),
  });

  taskInput.value = '';
  renderTasks(tasks);
};

const toggleTaskHandler = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) return;

  const taskId = Number(event.target.dataset.id);
  const task = tasks.find((item) => item.id === taskId);

  if (task) {
    task.done = event.target.checked;
    renderTasks(tasks);
  }
};

createButton.addEventListener('click', createTaskHandler);
listElem.addEventListener('click', toggleTaskHandler);

renderTasks(tasks);
