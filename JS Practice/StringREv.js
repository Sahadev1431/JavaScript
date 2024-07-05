let str = "hey kem cho";

// function rev(str) {
//     let reversed = "";
//     for (let i = str.length-1; i >= 0; i--) {
//         reversed = reversed + str[i];
//     }
//     return reversed;
// }

// console.log(rev(str));




    let ans = str.split(" ").map(function (word)
    {
        return word.split("").reverse().join("");
    })

console.log(ans.join(" "));