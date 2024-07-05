// let a = [1,2,3,4,5];
// let b = a;
// b.pop();   // this will change the value of a as well

// let c = [6,7,8,9,10];
// let d = [...c];
// d.pop();
// d.push(12);

// let obj = {name: "Sahadev"};
// let copyObj = {...obj};


// let arr = [1,2,3,5,9,45];

// arr.forEach(function(val){
//     console.log(val*3);     // no need to write function name.It is annonymus function
// })

// arr.forEach(val=>
//     {
//         return (val*val);
//     })

// console.log(arr);


// THIS IS UNSYNCRONYZED JS

// setTimeout(function()
// {
//     console.log("Run after 5 second");

// },2000);

// setTimeout(()=>
// {
//     console.log("arrow fnc will run after 3 second");
// },3000)



// FUNCTION INSIDE FUNCTION

// function fnc(a)
// {
//     let z = a();
//     console.log(z);
// }

// fnc(function newfnc()
// {
//     return 15;
// })








let arr = [1,2,3,4]
let dq = {name: "Sahadev"};
arr[-1] = 45;
console.log(arr);;
console.log(Array.isArray(dq));    //false
console.log(Array.isArray(arr));   //true
// console.log(typeof(arr));  //object