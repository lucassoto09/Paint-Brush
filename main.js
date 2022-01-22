canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "";
var lastX, lastY;
color = "black";
width_of_line = 3;

canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e) {
    mouseEvent = "mousedown";
}


canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke;
    }
    lastX=currentX;
    lastY=currentY;
}
