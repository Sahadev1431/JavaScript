// let arr = ["red","green","white","black"]

// // let newArr = arr.toString();

// function arrToString(inp)
// {
//     return inp.join(",")   
// }

// console.log(arrToString(arr))





function Hof(inp)                   //HIGHER ORDER FUNCTION
{
    return function lof(inp2)       //LOWER ORDER FUNCTION
    {
        return inp+inp2
    }
}

let abc = Hof(10)(20)
