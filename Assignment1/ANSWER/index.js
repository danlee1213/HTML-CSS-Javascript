const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h1 = document.querySelector("h1");

const superEventHandler = {
    mouseIn: function(){
        h1.innerText = "The mouse is here!";
        h1.style.color = colors[0];
    },
    mouseOut: function(){
        h1.innerText = "The mouse is gone!";
        h1.style.color = colors[1];
    },
    windowResize: function(){
        h1.innerText = "You just resized!";
        h1.style.color = colors[2];
    },
    isRightClick: function(){
        h1.innerText = "That was a right click!";
        h1.style.color = colors[4];
    }
};

h1.addEventListener("mouseenter", superEventHandler.mouseIn);
h1.addEventListener("mouseleave", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.isRightClick);