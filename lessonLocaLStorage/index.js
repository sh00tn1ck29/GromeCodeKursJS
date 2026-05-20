import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

window.addEventListener('storage', (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
});
