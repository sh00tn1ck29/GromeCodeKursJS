const baseUrl = 'https://6a18a2251878294b597d6a0c.mockapi.io/api/v1/tasks';

export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => response.json());
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => response.json());
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
