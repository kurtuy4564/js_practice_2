var createCounter = function (n) {
  let count = n 

  return function () {
    return count++ 
  }
}

const counter1 = createCounter(10)
console.log(counter1())
console.log(counter1())
console.log(counter1()) 
