

function check(something) {
  if (something) {
    console.log("this is true");
  } else {
    console.log("this is false");
  }
}

// any number is true without zero
check(4); //true
check(45); //true
check(0); //false
check(-1); //true

//if checking have anything it is true but if it is empty is is false 

  check("abc") //true
  check("AAA")//true
  check("@")//true
  check('') //false
  check(' ')//true

//undefined something is false 

var a ;
console.log(a); //undefined

check(a) //false

//null is false 

var b = null;
console.log(b);

check(b) //false

//NaN is false 

var c = NaN;
check(c); //false 

