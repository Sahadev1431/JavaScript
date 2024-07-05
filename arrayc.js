// let superHeroes = ["Ironman","Caption America","Thor","Hulk"]

// for(let i = 0; i < superHeroes.length;i++)
// {
//     console.log(superHeroes[i]);
// }


// for (let hero of superHeroes)
// {
//     console.log(hero);
// }

// let Marks = [85,97,44,37,76,60]
// let sum = 0
// for (let i of Marks)
// {
//     sum +=i;
// }
// console.log(`Average of marks is ${sum/Marks.length}`);


// let price = [250,645,300,900,50];
// for(let i = 0;i<price.length;i++)
// {
//     price[i] = price[i] - (price[i] * 0.10);
// }
// console.log(price);


// let veges = ["potato","tomato","spinach","onion","dudhi"];
// console.log(veges);
// veges.push("methi");
// // console.log(veges);
// veges.pop();
// console.log(veges);
// veges.unshift("Kobi");
// console.log(veges);
// let deletedFirst = veges.shift();
// console.log("Deleted value is",deletedFirst);
// console.log(veges);

// let slicedArray = veges.slice(1,4);
// console.log(slicedArray);

// veges.splice(1,3,"BAnana","orange")
// console.log(veges);




// let marks = [80,65,97,45];
// let newMarks = marks.toString()
// // console.log("type of newMarks is",typeof newMarks);
// console.log(marks);
// let deletedMarks = marks.pop();
// console.log(marks);
// console.log(`Deleted marks is ${deletedMarks}`);    



// let cricketers = ["Virat","Rohit","Dhoni"];
// let footballers = ["Ronaldo","Messi","Sunil"];
// let wwe = ["khali","Johncena","Roman"];
// let cf = cricketers.concat(footballers);
// console.log(cf);
// let all = cricketers.concat(footballers,wwe);
// console.log(all);




let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// console.log(companies);
// companies.splice(2,1,"OLA");
// console.log(companies);
companies.push("Amazon");
console.log(companies);