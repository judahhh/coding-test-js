function solution(n, k) {
    let answer = 0,prime,stack=[],arr=[]
prime=(n.toString(k)+"").split("")
for(let i=0;i<prime.length;i++){
  if(prime[i]!=="0")
   stack.push(prime[i])
  if(prime[i]==0&&i!==prime.length-1&&stack.length!=0) {
  arr.push(stack.join("")) 
   stack=[]
   continue
  }
 if(i==prime.length-1&&stack.length!=0)arr.push(stack.join("")) 
}

for(let i=0;i<arr.length;i++){
if(arr[i]!=1&&isPrime(arr[i]))
answer++
}
return answer
}

function isPrime(num) {
  if(num === 2) return true
  for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
    if(num % i === 0)
      return false
  }
  return true
}