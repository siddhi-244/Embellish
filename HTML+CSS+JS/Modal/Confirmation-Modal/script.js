const confirm = document.querySelector("#confirm");
const cancel = document.querySelector("#cancel");
const confirm_modal = document.querySelector(".confirm-modal");


const toggleModal = () => {
    console.log()
    confirm_modal.classList.toggle('animate_in', !confirm_modal.classList.contains('animate_in'))
}
confirm.addEventListener('click', toggleModal)
cancel.addEventListener('click', toggleModal)
