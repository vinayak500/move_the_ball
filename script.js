var ball = document.getElementById('ball');
var left =10;
var top_height=10;
ball.style.marginLeft = Math.random() * 50 + "px";
ball.style.marginTop = Math.random() * 50 + "px";
window.addEventListener('keydown' , function(event){

var code=event.keyCode;
// console.log(code);
if(code==68)
{
    left+=10;
    ball.style.marginLeft = left + "px";
}

if(code==65)
{
    left-=10;
    // console.log(left);
    ball.style.marginLeft = left + "px";
}

if(code==83)
{
    top_height+=10;
    ball.style.marginTop = top_height + "px";
}

if(code==87)
{
    top_height-=10;
    ball.style.marginTop = top_height + "px";
}


});