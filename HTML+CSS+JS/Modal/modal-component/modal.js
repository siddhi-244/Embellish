// Get DOM Elements. Got the button and the close span element also the whole div with id my-modal


const modal = document.querySelector('#my-modal');
//div with id my-modal


const modalBtn = document.querySelector('#modal-btn');
//a button


const closeBtn = document.querySelector('.close');
//close span element to close the modal.


// Event Listeners


modalBtn.addEventListener('click', openModal);
//clicking this triggers openModal function



closeBtn.addEventListener('click', closeModal);
//clicking this triggers closeModal function


window.addEventListener('click', outsideClick);
//the modal closes when you click outside the modalBtn so this is for the click event outside the modal.



//when you click the button with id modalBtn the modal is displayed in block form
function openModal() {
  modal.style.display = 'block';
}

// when you click the cross on the modal --> X then it displays nothing.
function closeModal() {
  modal.style.display = 'none';
}

// when you click outside the modal it closes automatically. 
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
