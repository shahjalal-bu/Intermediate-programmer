let bonus = 20;

function sum(first,second){
    let result = first + second;
    return bonus+result;
}

const output = sum(3,7);
console.log(output);

//here result variable we can not call it from the outside of the function

// console.log(result);

//and here bonus is global variable we can call it from inside or outside of the function 

console.log(bonus);

// https://www.thatjsdude.com/