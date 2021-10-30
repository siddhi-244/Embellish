let circle = document.getElementById('circle');
let bgImg = document.getElementById('bgImg');
window.addEventListener('mousemove', function(e){
    circle.style.background = `radial-gradient(circle closest-corner at ${e.pageX}px ${e.pageY}px, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)`
})
function randomIntFromInterval(min, max) { // min and max included 
    let number = Math.floor(Math.random() * (max - min + 1) + min)
    if (number>=5) {
        bgImg.src = "./img/img.jpg"
    } else {
        bgImg.src = "./img/img2.jpg"
    }
}
randomIntFromInterval(0,10);