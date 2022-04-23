const button = document.querySelector("button");

let isClicked = false;
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isClicked) {
    button.classList.add("active");
    isClicked = true;
  } else {
    button.classList.remove("active");
    isClicked = false;
  }
});
