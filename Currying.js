// currying is the process of transform our function's parameters into individual parameters.
// Method 1 : bind is the process of copy of a function.
//Method 2: using closer we can do currying.
const multiply =(x,y)=>{
console.log(x*y)
}
//lets create a bind function for above multiply
const multipleOfTwo = multiply.bind(this,2) // or const multipleOfTwo=multiply.bind(this) multipleofTwo(2,2)
multipleOfTwo(2) //4
const multipleOfThree = multiply.bind(this,3) // or const multipleOfThree=multiply.bind(this) multipleofTwo(3,2)
multipleOfThree(2) //6

//method 2
const multiply=function(x){
  return function(y){
    console.log(x*y)
  }
}

multiply(2)(2) //4
multiply(3)(2) //6
