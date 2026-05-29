import { renderTasks } from './renderer.js';
import { updateTask, deleteTask, getTasksList } from './tasksGateway.js';

export const handleListClicks = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  const isDeleteBtn = event.target.classList.contains('list__item-delete-btn');

  if (!isCheckbox && !isDeleteBtn) return;

  const taskId = event.target.dataset.id;

  // Сценарий 1: Клик по чекбоксу (Обновление задачи)
  if (isCheckbox) {
    getTasksList().then(tasks => {
      const task = tasks.find(item => String(item.id) === String(taskId));
      if (task) {
        const updatedTask = {
          ...task,
          done: event.target.checked,
          doneDate: event.target.checked ? new Date().toISOString() : null,
        };

        updateTask(taskId, updatedTask)
          .then(() => getTasksList())
          .then(tasksList => renderTasks(tasksList));
      }
    });
  }

  // Сценарий 2: Клик по кнопке удаления
  if (isDeleteBtn) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then(tasksList => renderTasks(tasksList));
  }
};
