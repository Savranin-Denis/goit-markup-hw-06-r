const heroBtn = document.querySelector('.hero-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');

if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    modalOverlay.classList.add('is-open');
  });
}

modalCloseBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('is-open');
});

modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('is-open');
  }
});

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileOverlay.classList.add('is-open');
  });
}

mobileCloseBtn.addEventListener('click', () => {
  mobileOverlay.classList.remove('is-open');
});

mobileOverlay.addEventListener('click', event => {
  if (event.target === mobileOverlay) {
    mobileOverlay.classList.remove('is-open');
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalOverlay.classList.remove('is-open');
    mobileOverlay.classList.remove('is-open');
  }
});
