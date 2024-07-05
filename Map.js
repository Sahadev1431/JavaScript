// let arr = [1,2,3,4,5];

// let ans1 = arr.map(function(val)
// {
//     return val*2;
// })


// let arr2 = ["Hello","nice","a","apple"];

// let ans2 = arr2.map(function(val)
// {
//     if(val.length === 5)
//     {
//         return `<p>${val}</p>`;
//     }
//     else
//     {
//         return `<span>${val}</span>`;
//     }
// })






// let arr3 =  [
//     {name:"Sahadev",age:22},
//     {name:"Jatin",age:23},
//     {name:"Gautan",age:22}
// ]

// let ans3 = arr3.map(function(val)
// {
//     return val.name;
// })

let arr3 =  [
    {name:"Sahadev",age:22},
    {name:"Jatin",age:23},
    {name:"Gautan",age:22}
]

let ans3 = arr3.map(function(val)
{
    return {name: val.name};
})