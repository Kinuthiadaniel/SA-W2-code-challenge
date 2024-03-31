//define a function that takes 2 numbers
function createArray(num1,num2){
  //determines the smaller and larger number.
const start = Math.min(num1,num2);
const end = Math.max(num1,num2);
//declare an empty array to hold populated array
const populated =[];
//Iterates from start to end inclusive
for (let i = start;i<=end;i++){
  // add each iteration to the new array
  populated.push(i);
}
//the function returns the populated array
return populated;
}
//prints the new generated array
 console.log(createArray(4,7))
 console.log(createArray(-4,7))