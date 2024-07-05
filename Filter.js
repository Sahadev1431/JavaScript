// let arr = [1,2,3,4,5,6,7]

// let ans = arr.filter(function(val)
// {

//     // return (val%2 ===0);        //short way
//     if(val%2 === 0)
//     {
//         return true        //also do return this
//     }
// })



// let arr2 = ["Sahadev","Jatin","Gautam","jyoti","mukesh"]

// let ans2 = arr2.filter(function(val)
// {
//     for(let i = 0;i<val.length;++i)
//     {
//         if(val.charAt(i)==='a')
//         {
//             return false;
//         }
//     }
//     return true
// })

let arr2 = ["Harsh","abhay","sumit","anushka","radhika"];
let ans2 = arr2.filter(function(val)
{
    let count = 0;
    for(char of val)
    {
        if(char === 'a')
        {
            count++;
        }
    }

    return count < 2;
})








