import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';

export const toggleTaskHandler = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) return;

  const taskId = event.target.dataset.id;
  const tasks = getItem('tasksList') || [];

  const task = tasks.find((item) => String(item.id) === String(taskId));

  if (task) {
    task.done = event.target.checked;
    task.doneDate = task.done ? new Date() : null;

    setItem('tasksList', tasks);
    renderTasks(tasks);
  }
};
