const modalBackground = document.querySelector('.modalBackground')
const buttonOpenModal = document.querySelector('#buttonOpen')
const buttonCloseModal = document.querySelector('#buttonClose')

// Opening Modal
buttonOpenModal.addEventListener('click', () => {
    modalBackground.classList.add('modalActive')
})

// Closing Modal
buttonCloseModal.addEventListener('click', () => {
    modalBackground.classList.remove('modalActive')
})