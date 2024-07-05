let Bulb = document.querySelector(".bulb");
let but = document.querySelector("#bt1");

var flag = 0;

but.addEventListener("click", function () {
    if (flag === 0) 
    {
        Bulb.style.backgroundColor = "yellow"
        flag = 1;
    }
    else
    {
        Bulb.style.backgroundColor = "Black";
        flag = 0;
    }
})