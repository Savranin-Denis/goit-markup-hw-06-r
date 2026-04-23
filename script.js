const heroBtn = document.querySelector('.hero-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');

heroBtn.addEventListener('click', () => {
  modalOverlay.classList.add('is-open');
});

modalCloseBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('is-open');
});

modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('is-open');
  }
});
