import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getItem } from './storage.js';

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    
    const updatedTasks = e.newValue ? JSON.parse(e.newValue) : [];
    renderTasks(updatedTasks);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  const tasks = getItem('tasksList') || [];
  renderTasks(tasks);
  
  
  initTodoListHandlers();
});


window.addEventListener('storage', onStorageChange);
