function Palindrone(str){
  let rev='';
  for(let i=str.length-1;i>=0;i--){
      rev+=str[i]
  }
  if(rev==str){
    return true;
  }
  return false;
}
let check = Palindrone("naman");
if(check){
  console.log("Yes its palindrone");
}else{
  console.log("No its not palindrone");
}
