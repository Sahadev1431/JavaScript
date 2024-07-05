// let ele1 = document.querySelector(".elem1");
// let ele1Img = document.querySelector(".elem1 img");

// ele1.addEventListener("mousemove",function(dets)
// {
//     ele1Img.style.left = dets.clientX+"px";
//     ele1Img.style.top = dets.clientY+"px";
// })

// ele1.addEventListener("mouseenter",function()
// {
//     ele1Img.style.transform = "translate(-50%,-50%)";
//     ele1Img.style.opacity = 1;
// })

// ele1.addEventListener("mouseleave",function()
// {
//     ele1Img.style.opacity = 0;
// })


let elems = document.querySelectorAll(".elem");
// let img = document.querySelectorAll(".elem img");
elems.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function(dets)
    {
        elem.childNodes[1].style.opacity = 1;
        
    })

    elem.addEventListener("mouseleave",function()
    {
        elem.childNodes[1].style.opacity = 0
    })

    elem.addEventListener("mousemove",function(dets)
    {
        // elem.childNodes[1].style.transform = 'translate(-50%,-50%)';
        elem.childNodes[1].style.left = dets.x+"px";
        elem.childNodes[1].style.top = dets.y + "px";
    })
})