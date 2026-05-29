
export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};


export const fetchRepositories = (reposUrl) => {
  return fetch(reposUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};
