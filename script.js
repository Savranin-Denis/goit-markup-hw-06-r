const heroBtn = document.querySelector('.hero-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');

if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    modalOverlay.classList.add('is-open');
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('is-open');
  });
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', event => {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove('is-open');
    }
  });
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });
}

if (mobileCloseBtn) {
  mobileCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
}

if (mobileMenu) {
  mobileMenu.addEventListener('click', event => {
    if (event.target === mobileMenu) {
      mobileMenu.classList.remove('is-open');
    }
  });
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (modalOverlay) modalOverlay.classList.remove('is-open');
    if (mobileMenu) mobileMenu.classList.remove('is-open');
  }
});
