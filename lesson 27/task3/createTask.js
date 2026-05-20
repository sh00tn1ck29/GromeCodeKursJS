import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';

const taskInput = document.querySelector('.task-input');

export const createTaskHandler = () => {
  const text = taskInput.value;
  if (!text) return;

  const tasks = getItem('tasksList') || [];

  tasks.push({
    text,
    done: false,
    id: Math.random().toString(36).substr(2, 9),
    createDate: new Date(),
  });

  taskInput.value = '';

  setItem('tasksList', tasks);
  renderTasks(tasks);
};
