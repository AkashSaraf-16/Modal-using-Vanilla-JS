'use strict';

const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModal = function () {
  console.log('clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// handling esc press
document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
