const nums = [1,2,3,4,5,6,7,8,9];
// for (let index = 0; index < nums.length; index++) {
//    if(nums[index]>3){
//        break;
//    }
//     console.log(nums[index]);
// }

for (let index = 0; index < nums.length; index++) {
    if(nums[index] > 3){
        continue;
    }
    console.log(nums[index]);
}