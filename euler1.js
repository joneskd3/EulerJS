var total = 0;
var divisibleByThree = [];
var divisibleByFive = [];

for(i = 1; i <1000; i++){
  if(i % 3 === 0){
    total += i;
    divisibleByThree.push(i);
    console.log(total);
  } else if (i % 5 === 0){
    total += i;
    divisibleByFive.push(i);
    console.log(total);
  } else {
    console.log("Not Divisble");
  }
}