let names: string[] = ["sachin", "meenu", "chinnu", "minu"];
console.log("Names:" ,names);

console.log(names[1]);

for (let i:number =0; i<names.length; i++){
    console.log(`names at index ${i} is ${names[i]}`);
}

let numbers: readonly number[] = [1,2,3,4,5];
let newArray = numbers.map((value) => value*2);
console.log("number aray:" +numbers)
console.log("new array:" , newArray)    

let oddnumber = numbers.filter((value) => value%2 !==0);
console.log("odd nums are", oddnumber)

let sum= numbers.reduce((accumulator, currentValue) => accumulator+currentValue,0);
console.log("sum:", sum)