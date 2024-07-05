// let cName = prompt("Enter your name");
// console.log(cName);

// let num = prompt("enter number")
// if(num % 5 === 0)
// {
//     console.log(num,"is devided by 5");
// }
// else
// {
//     console.log(num,"is not devided by 5");
// }

let marks = prompt("Enter marks");  

if(marks>=90 && marks<=100)
{
    console.log("your marks are",marks,"And grade is 'A'");
}
else if(marks>=80 && marks<=89)
{
    console.log("your marks are",marks,"And grade is 'B'");
}
else if(marks>=70 && marks<=79)
{
    console.log("your marks are",marks,"And grade is 'C'");
}
else if(marks>=60 && marks<=69)
{
    console.log("your marks are",marks,"And grade is 'D'");
}
else
{
    console.log("Your marks are",marks,"And grade is 'F'");
}