'use strict';

export const fetchUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (!response.ok) {
    throw new Error('Failed to load data');
  }
  return response.json();
};

export const fetchRepositories = async (reposUrl) => {
  const response = await fetch(reposUrl);
  if (!response.ok) {
    throw new Error('Failed to load data');
  }
  return response.json();
};
