import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  const listElem = document.querySelector('.list');

  if (createBtnElem) {
    createBtnElem.addEventListener('click', onCreateTask);
  }
  if (listElem) {
    listElem.addEventListener('click', onToggleTask);
  }
};
