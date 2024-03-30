const myArray = [1,2,3,4,5,6,7,8,9,10]
function isPrime(arr){
  if(arr <= 1)return false;
  if (arr === 2)return true;
  for (let i =0; i<= Math.sqrt(arr);i++){
    if (arr%i === 0)return false;
  }return true;
}
function primenumbers(arrays){
  return arrays.filter((arr)=>
    isPrime(arr)
  )
}
const primeNumbers = primenumbers(myArray)
console.log(primeNumbers)