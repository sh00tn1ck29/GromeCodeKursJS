import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value.trim();

  if (text === '') return;

  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    id: Math.random().toString(36).substring(2, 9),
    text: text,
    done: false,
  });

  inputElem.value = '';
  setItem('tasksList', newTasksList);
  renderTasks();
};
