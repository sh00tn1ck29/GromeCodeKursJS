import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const createButton = document.querySelector('.create-task-btn');
  const listElem = document.querySelector('.list');

  createButton.addEventListener('click', onCreateTask);
  listElem.addEventListener('click', onToggleTask);
};
