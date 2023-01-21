function solution(brown, yellow) {
    let answer = [0,0];
 for(let i=1;i<=yellow;i++){

  if(yellow%i==0){
console.log(i)
if(brown+yellow==(yellow/i+2)*(i+2)){
console.log(i)
answer[0]=(yellow/i+2)
answer[1]=(i+2)
break
}
}
}
    return answer;
}