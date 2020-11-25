const title = document.querySelector('#title');

const BASE_COLOR = "black";
const OTHER_COLOR ="#1abc9c"; 

title.innerHTML  = "Hello!";
//title.style.color = 'green';
document.title = 'Assignment1 Go'

/*
function handleClick(){
    const currentColor = title.style.color;
    if(currentColor == BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
} */

function mouseIn(){
    title.innerHTML = "The mouse is here!"
    title.style.color = "cyan"
}

function mouseOut(){
    title.innerHTML = "The mouse is gone!"
    title.style.color = "blue"
}

function rightClick(){
    title.innerHTML = "That was a right click!"
    title.style.color = "red"
}

function handleResize(){
    title.innerHTML = "You just resized!";
    title.style.color = "purple";
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", mouseIn);
    title.addEventListener("mouseleave", mouseOut);
    window.addEventListener("resize", handleResize);
    window.addEventListener("contextmenu",rightClick);
}

init();
//title.addEventListener("click", handleClick);
//window.addEventListener("resize", handleResize);
/*
 console.error("wtf!");
 console.dir(document);*/