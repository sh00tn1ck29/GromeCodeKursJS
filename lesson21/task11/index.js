export function manageClasses() {

  const oneEl = document.querySelector('.one');
  oneEl.classList.add('selected');


  const twoEl = document.querySelector('.two');
  twoEl.classList.remove('selected');


  const threeEl = document.querySelector('.three');
  threeEl.classList.toggle('three_done');


  const fourEl = document.querySelector('.four');
  if (fourEl.classList.contains('some-class')) {
    fourEl.classList.add('another-class');
  }
}
