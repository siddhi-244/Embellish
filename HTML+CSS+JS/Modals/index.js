const modalBackground = document.querySelector('.modalBackground')
const buttonOpenModal = document.querySelector('#buttonOpen')
const buttonCloseModal = document.querySelector('#buttonClose')

buttonOpenModal.addEventListener('click', () => {
    modalBackground.classList.add('modalActive')
})

buttonCloseModal.addEventListener('click', () => {
    modalBackground.classList.remove('modalActive')
})