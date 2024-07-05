let rect = document.querySelector("#rect");
let love = document.querySelector("i");

let crsr = document.querySelector(".cursor");
let body = document.querySelector("body");

rect.addEventListener("dblclick",function()
{
    love.style.transform = 'translate(-50%,-50%) scale(1.5)';
    love.style.opacity = 1;

    setTimeout(function()
    {
        love.style.transform = 'translate(-50%,-50%) scale(0)';
    },700)
})

body.addEventListener("mousemove",function(dets)
{
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})