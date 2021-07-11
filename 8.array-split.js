const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,5);
console.log(part);

const removed = nums.splice(2,5)
console.log(removed);
console.log(nums);

//that means slice method not change original arrays but splice method change original
//slice  first parameter is staring position and second parameter is end position 
//splice first parameter is staring position and second parameter is how many element is splice 

var together = nums.join("");
console.log(together);
var together = nums.join("  ");
console.log(together);
var together = nums.join("-");
console.log(together);