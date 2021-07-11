//double equal can not check datatype but triple equal check value with type

function check(first,second) {
    if (first == second) {
      console.log("this is true");
    } else {
      console.log("this is false");
    }
  }
function check2(first,second) {
    if (first === second) {
      console.log("this is true");
    } else {
      console.log("this is false");
    }
  }
  

check(2,"2")  //true
check(1,true)  //true
check2(2,"2") //false 
check2(2,true) //false 