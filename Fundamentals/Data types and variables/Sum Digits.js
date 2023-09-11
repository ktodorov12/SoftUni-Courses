function sum(number){
	let sum = 0;
    let toWord = String(number) 
  for(let count of toWord){
   sum += parseFloat(count);
  }
  console.log(sum);
}
sum(124124);