let words: string = "correspondence";
let v: string = "aeiou";
let count : number = 0;


for (let i = 0; i < v.length; i++) {
    let vo = v[i];
    let freq = 0;

    for(let j = 0; j< words.length; j++){
        if(words[j] === vo){
            freq++;
        }
    }
    if(freq ===1){
        count++;
    }
}

console.log(count);
