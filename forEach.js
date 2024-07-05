// let arr = ["Thara","Ahmedabad","Sanand","radhanpur"];

// arr.forach(function myFunc(val)
// {
//     console.log(val);
// })

// arr.forEach((val)=>
// {
//     console.log(val.toUpperCase());
// })

let numArray = [2,4,5,6,9,4];

// numArray.forEach((val)=>
// {
//     console.log(`The square of ${val} is `,val*val);
// })

let calSquare = (num)=>
{
    console.log(num*num);
}

numArray.forEach(calSquare);