canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mouseEvent="empty";
color="blue";
line_width=2;
last_position_x,last_position_y;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_position_x=e.clientX-canvas.offsetLeft;
    var current_position_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        console.log("Last position of X AND Y coordinates=");
        console.log("X= " +last_position_x+", Y= "+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("Current position of X AND Y coordinates=");
        console.log("X= " +current_position_x+", Y= "+current_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();

    }
last_position_x=current_position_x;
last_position_y=current_position_y;
}
