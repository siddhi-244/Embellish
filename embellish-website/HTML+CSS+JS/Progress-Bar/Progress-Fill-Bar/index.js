var skillcontainer = document.getElementById('skills-display');
var skills = document.getElementsByClassName('fill-progress');
var ani = false;
window.addEventListener('scroll',checkscroll);

// function to fill the width of the skills bar
function animation(){
    ani = true;
    for(let i = 0; i < skills.length; i++){
        let c = 0;
        //fetching the data-width attribute from html file
        let finwidth = skills[i].getAttribute('data-width');
        let x = setInterval(function() { //this function will be executed every 0.005s
            c = c + 1;
            skills[i].style.width = c + '%'; //increasing the width
            if(c >= finwidth)
                clearInterval(x);
        },5)//0.005s timmer as 1s = 1000 (as unit is milliseconds)
    }
}

// function which constanly checks wheater skills bar sections is visible or not
//if distance from the top to the skill bar section is less than window's height we are executing the animation() function
function checkscroll(){
    if(!ani && skillcontainer.getBoundingClientRect().y < window.innerHeight){
        animation();
    }
    else if(skillcontainer.getBoundingClientRect().y > window.innerHeight){
        ani = false;
    }
}