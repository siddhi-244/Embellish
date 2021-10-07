document.querySelector('button').addEventListener('mousemove', boxEffect)
document.querySelector('button').addEventListener('mouseleave', revertState)
function boxEffect(event){
	let x = event.clientX - event.target.offsetLeft
	let y = event.clientY - event.target.offsetTop
	let width = event.target.offsetWidth
	let height = event.target.offsetHeight
	event.target.style.boxShadow = `${abs(x, width/2)*10}px ${abs(y, height/2)*10}px #444`
	event.target.style.transform = `rotateZ(${abs(x, width/2)*5}deg) rotateX(${abs(y, height/2)*15}deg)`
}
function abs(x,y){
	if(x < y){ return 1 } else{ return -1 }
}
function revertState(event){
    event.target.style.boxShadow = '6.5px 6.5px #444'
    event.target.style.transform = 'rotateX(0) rotateZ(0)'
}
