//Declare the array
const que = 'The Quick Brown Fox'
//define a function
function block(string){
  //declare a variable that holds the destructured string
const arrayed = string.split(" ")
//declare a variable that uses the map method to hold the modifed string
let loweredstring = arrayed.map((word)=>{
  //the innerfunction grabs the first letter of each word by index and uses slice method to capitalize the remaining letters
  return word.charAt(0).toLowerCase() + word.slice(1).toUpperCase();
})
// the function uses the join method to restructre the new array and returns the joined string
return loweredstring.join(' ')
}
//print the results of any string passed as an argument
console.log(block(que))