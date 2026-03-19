let nums : number[] = [8,2,5,1,4,9,6,3];
for(let i :number= 0; i < nums.length; i++){
    for (let j :number = i + 1; j < nums.length; j++){
        if(nums[i]>nums[j]){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}
console.log(nums);