import { renderTasks } from './renderer.js';
import { createTask, getTasksList } from './tasksGateway.js';

const taskInput = document.querySelector('.task-input');

export const createTaskHandler = () => {
  const text = taskInput.value;
  if (!text) return;

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  taskInput.value = '';

  createTask(newTask)
    .then(() => getTasksList())
    .then(tasks => {
      renderTasks(tasks);
    });
};
