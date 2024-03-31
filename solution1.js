const que = 'The Quick Brown Fox'
function block(string){
const arrayed = string.split(" ")
let loweredstring = arrayed.map((word)=>{
  return word.charAt(0).toLowerCase() + word.slice(1).toUpperCase();
})
return loweredstring.join(' ')
}
console.log(block(que))