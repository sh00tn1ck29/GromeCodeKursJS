const elem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');

const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');


function logEvent(text, color) {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}


const logGreyDiv = logEvent.bind(null, 'div', 'grey');
const logGreyP = logEvent.bind(null, 'p', 'grey');
const logGreySpan = logEvent.bind(null, 'span', 'grey');

const logGreenDiv = logEvent.bind(null, 'div', 'green');
const logGreenP = logEvent.bind(null, 'p', 'green');
const logGreenSpan = logEvent.bind(null, 'span', 'green');


function attachHandlers() {

  elem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);


  elem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);
}


function removeHandlers() {

  elem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, true);

  elem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);
}


attachBtn.addEventListener('click', attachHandlers);
removeBtn.addEventListener('click', removeHandlers);

clearBtn.addEventListener('click', () => {
  eventsList.innerHTML = '';
});


attachHandlers();
