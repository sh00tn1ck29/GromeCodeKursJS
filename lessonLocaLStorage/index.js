import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  let tasks = getItem('tasksList');
  if (!tasks) {
    setItem('tasksList', initialTasks);
    tasks = initialTasks;
  }

  renderTasks(tasks);
  initTodoListHandlers();
});
