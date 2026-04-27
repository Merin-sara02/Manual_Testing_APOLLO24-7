function add(){
    let n1:number = 8;
    let n2:number = 6;
    console.log(`sum is ${n1+n2}`);
}

function sub(num1: number, num2:number){
    console.log(`${num1-num2}`);
}

function mul(num1: number, num2:number): number{
    return num1*num2;
}

add();
sub(5,3);
console.log(mul(2,4));

/* optional parameter .always put opt param at the end
*/

function details(name:string, age?:number){
    if(age)
    {
        console.log(`name:${name}, age>${age}`);
    }
    else
    {
        console.log(`name:${name}`);
    }
}

details("merin", 22);
details("sherin");