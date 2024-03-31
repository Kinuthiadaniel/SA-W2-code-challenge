function createArray(num1,num2){
const start = Math.min(num1,num2);
const end = Math.max(num1,num2);
const populated =[];
for (let i = start;i<=end;i++){
  populated.push(i);
}
return populated;
}
 console.log(createArray(4,7))
 console.log(createArray(-4,7))