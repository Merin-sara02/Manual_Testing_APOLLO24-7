let w:number = 40;
let h:number = 157;
let b:number = w/((h/100)*(h/100));
if(b < 18.5){
    console.log("underweight");
}
else if (b > 18.5 && b<25){
    console.log("normal weight");
}
else if(b >= 25 && b <30){
    console.log("over weight")
}
else{
    console.log("obesity")
}