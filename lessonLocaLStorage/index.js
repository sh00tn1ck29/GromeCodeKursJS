import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const tasks = getItem('tasksList') || [];

  renderTasks(tasks);
  initTodoListHandlers();
});
