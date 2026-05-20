import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) return;

  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        done: event.target.checked,
      };
    }
    return task;
  });

  setItem('tasksList', newTasksList);
  renderTasks();
};
