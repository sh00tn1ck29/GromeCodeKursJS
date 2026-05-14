
const arenaElement = document.querySelector('.arena');
const boardSelectedSeat = document.querySelector('.board__selected-seat');

const createArray = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

const getSectorSeat = () => {
  return createArray(1, 10)
    .map(
      (sectorSeat) =>
        `<div class="sector__seat" data-seat-number="${sectorSeat}"></div>`,
    )
    .join('');
};

const getSectorLines = () => {
  const seatsString = getSectorSeat();

  return createArray(1, 10)
    .map(
      (sectorLine) =>
        `<div class="sector__line" data-line-number="${sectorLine}">${seatsString}</div>`,
    )
    .join('');
};

const createSector = () => {
  const linesString = getSectorLines();

  const sectorsString = createArray(1, 3)
    .map(
      (numberSector) =>
        `<div class="sector" data-sector-number="${numberSector}">${linesString}</div>`,
    )
    .join('');

  arenaElement.innerHTML = sectorsString;
};

createSector();

const getSelectedSeat = (event) => {
  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;
  const seatSelected = event.target.classList.contains('sector__seat');

  if (!seatSelected) {
    return;
  }
  boardSelectedSeat.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElement.addEventListener('click', getSelectedSeat);
