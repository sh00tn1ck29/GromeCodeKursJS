import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

const initialTasks = [
  { text: 'Buy milk', done: false, id: 1, createDate: new Date(2026, 4, 10) },
  {
    text: 'Pick up Tom from airport',
    done: false,
    id: 2,
    createDate: new Date(2026, 4, 11),
  },
  {
    text: 'Visit party',
    done: false,
    id: 3,
    createDate: new Date(2026, 4, 12),
  },
  {
    text: 'Visit doctor',
    done: true,
    id: 4,
    createDate: new Date(2026, 4, 8),
    doneDate: new Date(2026, 4, 8),
  },
  {
    text: 'Buy meat',
    done: true,
    id: 5,
    createDate: new Date(2026, 4, 9),
    doneDate: new Date(2026, 4, 9),
  },
];

document.addEventListener('DOMContentLoaded', () => {
  let tasks = getItem('tasksList');
  if (!tasks) {
    setItem('tasksList', initialTasks);
    tasks = initialTasks;
  }

  renderTasks(tasks);
  initTodoListHandlers();
});
