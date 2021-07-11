var numbers = [3, 4, 5, 6, 7, 8];

numbers.map(function (element, index, array) {
  console.log(element, index, array);
});

const result = numbers.map(x => x * x);
console.log(result);

//filter

//condition ful fil

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

//foreach

numbers.forEach((item, index) => {
  console.log(item, index);
});
//find not return array it return only first element which is meet with codition ]

const bigger2 = numbers.find(x => x > 5);
console.log(bigger2);

//reduce
// function func(accumulator, currentValue,currentIndex,sourceArray)
function func(accumulator, currentValue, currentIndex, sourceArray) {
  return accumulator + currentValue;
}
const sum = numbers.reduce(func);
console.log(sum);
/*
    var numbers = [3,4,5,6,7,8];
    accumulator   currentValue
        3            4
        7            5
        12           6
        18           7
        25           8
        33
        that means sum is 33
        */

const sum2 = numbers.reduce(func, 1000);
console.log(sum2);

/*
    if we told accumulate something suppose we told accumulate is 1000

    var numbers = [3,4,5,6,7,8];
    accumulator   currentValue
        1000          3
        1003          4
        1007          5
        1012          6
        1018          7
        1025          8
        1033
        that means sum is 1033
        */
