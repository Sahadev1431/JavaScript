let btn = document.querySelector("#rect .buttonContainer #add");
let istatus = document.querySelector("h5");

let flag = false;
btn.addEventListener("click",function()
{
    if(flag === false)
    {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "black";
        flag = true;
    }
    else
    {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "cadetblue";
        btn.style.color = "white";
        flag = false;
    }
})

