var skillcontainer = document.getElementById('skills-display');
var skills = document.getElementsByClassName('fill-progress');
var ani = false;
window.addEventListener('scroll',checkscroll);

function animation(){
    ani = true;
    for(let i = 0; i < skills.length; i++){
        let c = 0;
        let finwidth = skills[i].getAttribute('data-width');
        let x = setInterval(function() {
            c = c + 1;
            skills[i].style.width = c + '%';
            if(c >= finwidth)
                clearInterval(x);
        },5)
    }
}

function checkscroll(){
    if(!ani && skillcontainer.getBoundingClientRect().y < window.innerHeight){
        animation();
    }
    else if(skillcontainer.getBoundingClientRect().y > window.innerHeight){
        ani = false;
    }
}