//how to get undefined 

//1st way = if we don't define a variable value

let phaki;
console.log(phaki);

//if function not return anything but when call we tell it two console something that's time it show undefined

function add(num1,num2){
    console.log(num1+num2);
}
const result = add(5,10);
console.log(result);

//but if we don't pass a parameter 

function add2(num){
    console.log(num);
}
add2()

//if we want to get object property but it don't have this object this time it show undefined 

const premik = {
    name : "salman khan"
}
console.log(premik.name);
console.log(premik.age);

//null means not have anything 