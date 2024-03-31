//declare the array
const myArray = [1,2,3,4,5,6,7,8,9,10]
//define a function that checks if a number is a prime number 
function isPrime(arr){
  if(arr <= 1)return false;
  if (arr === 2)return true;
  //iterates thru the array and return a number if only divisible by itself and 1
  for (let i =0; i<= Math.sqrt(arr);i++){
    if (arr%i === 0)return false;
  }return true;
}
//define a function that takes an array and uses the "isPrime" function to filter non-primes
function primeNumbers(arrays){
  return arrays.filter((arr)=>
    isPrime(arr)
  )
}
// we call "primeNumbers" function with the array as the argument and the results stored in a new array
const primeNumber = primeNumbers(myArray)
console.log(primeNumber)