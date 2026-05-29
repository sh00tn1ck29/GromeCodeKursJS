import { fetchUserData, fetchRepositories } from './gateway.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const repoListElem = document.querySelector('.repo-list');

const inputElem = document.querySelector('.name-form__input');
const showUserBtn = document.querySelector('.name-form .btn');


userAvatarElem.src = defaultAvatar;
userNameElem.textContent = '';
userLocationElem.textContent = '';


const renderRepos = (reposList) => {
  repoListElem.innerHTML = ''; 
  
  const reposElems = reposList.map(({ name }) => {
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;
    return listElem;
  });
  
  repoListElem.append(...reposElems);
};

const onSearchUser = () => {
  const userName = inputElem.value.trim();
  if (!userName) return;

  showSpinner(); 
  repoListElem.innerHTML = ''; 

  fetchUserData(userName)
    .then((userData) => {

      userAvatarElem.src = userData.avatar_url;
      userNameElem.textContent = userData.name || '';
      userLocationElem.textContent = userData.location ? `from ${userData.location}` : '';
      
    
      return fetchRepositories(userData.repos_url);
    })
    .then((reposList) => {
      renderRepos(reposList);
    })
    .catch((error) => {

      alert('Failed to load data');
    })
    .finally(() => {
      hideSpinner(); 
    });
};

showUserBtn.addEventListener('click', onSearchUser);
