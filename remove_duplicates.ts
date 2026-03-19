let str: string = "merinsaramathew";
let result: string = "";
for(let i : number=0; i< str.length; i++){
    let count:number = 0;

    for(let j: number=0; j <str.length; j++){
        if(str[i] === str[j]){
            count++;
        }
    }
    if(count === 1){
        result += str[i]
    }
}
console.log(result);
