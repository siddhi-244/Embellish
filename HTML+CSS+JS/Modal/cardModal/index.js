const pressMeButton = document.querySelector('.holder__button');
const modal = document.querySelector('.modal--outter')
const modalButton = document.querySelector('.modal__button');

function openModal() {
  modal.classList.add('is-open')
}

function closeModal() {
  modal.classList.remove('is-open');
}

function handleKeyUp(el) {
  if (el.key === 'Escape') return closeModal();
}

pressMeButton.addEventListener('click', openModal)
modalButton.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal);
window.addEventListener('keyup', handleKeyUp)
