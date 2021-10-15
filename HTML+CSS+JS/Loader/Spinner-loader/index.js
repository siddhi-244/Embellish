var button = document.getElementById("btn");
var animation = document.getElementById("animation");
var isSpinning = false;

button.addEventListener("click", function() {
    if(isSpinning) {
        animation.setAttribute('type', "none");
    }else {
        animation.setAttribute('type', "rotate");
    }
    isSpinning = !isSpinning;
});