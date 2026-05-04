const popup = document.querySelector('[data-popup]');
const openBtn = document.querySelector('[data-popup-open]');
const closeBtn = document.querySelector('[data-popup-close]');

openBtn?.addEventListener('click', () => popup?.classList.add('open'));
closeBtn?.addEventListener('click', () => popup?.classList.remove('open'));
popup?.addEventListener('click', (event) => {
  if (event.target === popup) popup.classList.remove('open');
});
