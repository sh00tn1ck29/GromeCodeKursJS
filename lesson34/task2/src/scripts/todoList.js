import { createTaskHandler } from './createTask.js';
import { handleListClicks } from './updateTask.js';

export const initTodoListHandlers = () => {
  const createButton = document.querySelector('.create-task-btn');
  const listElem = document.querySelector('.list');

  createButton.addEventListener('click', createTaskHandler);
  listElem.addEventListener('click', handleListClicks);
};
