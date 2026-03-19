let hr:number = 9;
let m: number = 3;

let times:number = hr * 60 + m;
let ontime:number = 9 * 60 + 30;

if(times == ontime){
    console.log("ontime");
}
else if(times < ontime){
    console.log("early");
}
else{
    console.log("late");
}
