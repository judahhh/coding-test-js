function isPrime(num){
if(num<2) return false
 for(let i=2;i<=Math.sqrt(num);i++){
 if(num%i===0) return false
 }
return true
}

function solution (n,k){
  let answer=[], result=[]
  let arr=n.toString(k).split('')

arr.forEach((v,i)=> {
if(v!=='0') result.push(v)
else {
answer.push(result.join(''))
result=[]
}
if(i==arr.length-1&&result.length!==0) answer.push(result.join(''))
})
answer=answer.map((v)=>Number(v)).filter(v=>isPrime(v)==true)
  return answer.length
}