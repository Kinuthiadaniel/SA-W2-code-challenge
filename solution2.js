function createArray(start,end){
  return Array.from({length: end - start+1 },(_, index)=>{return start + index})
 }
 console.log(createArray(4,7))
 console.log(createArray(-4,7))