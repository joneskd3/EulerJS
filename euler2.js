var firstTerm = 1;
var secondTerm = 1;
var total;
var sum = 0;

while(total <= 4000000){
  total = firstTerm + secondTerm;
  if(total % 2 === 0){
    sum += total;
  }
  firstTerm = secondTerm;
  secondTerm = total;
  
  console.log(sum);
}