num = [2,3,6,8,4];

// let newArr = num.map((val)=>
// {
//     return val*val;
// })

// console.log(newArr);

let secArray = num.filter((val)=>
{
    return val%2 === 0;
})

console.log(secArray);