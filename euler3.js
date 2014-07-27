var largestPrime = 1;
var numberToFactor = 600851475143;

for(var i = 2; i < numberToFactor; i++){
  if(numberToFactor % i === 0){
    if(largestPrime < i){
      largestPrime = i;
      console.log(i);

    }
    numberToFactor = numberToFactor/i;
    i = 2;
  }
}
if(numberToFactor > largestPrime){
  largestPrime = numberToFactor;
}
console.log(largestPrime);
