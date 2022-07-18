canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
var color="red";
var line_width=2;

var mouseEvent="";
var LastPositionX;
var LastPositionY;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("inputcolor").value;
    line_width=document.getElementById("line_width").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    CurrentPositionOfMouseX=e.clientX-canvas.offsetLeft;
    CurrentPositionOfMouseY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
ctx.moveTo(LastPositionX,LastPositionY);

console.log("Last Position of X and Y:");
console.log("X="+ LastPositionX+" Y="+LastPositionY);

ctx.lineTo(CurrentPositionOfMouseX,CurrentPositionOfMouseY);

console.log("Current Position of X and Y:");
console.log("X="+CurrentPositionOfMouseX+"Y="+CurrentPositionOfMouseY);
ctx.stroke();


    }
    LastPositionX=CurrentPositionOfMouseX;
    LastPositionY=CurrentPositionOfMouseY;
}

function clear_canvas(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
}