function checkPrime(num){
  let factors=0;
  for(let i=1;i<=num;i++){
 	if(num%i==0){
		factors++;
	}
  }
  if(factors==2){
    return true;
  }
  return false;
}
let ans = checkPrime(23);
if(ans){
  console.log(23,"is prime number");
}else{
  console.log(23,"is a not a prime number");
}