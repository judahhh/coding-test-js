function solution(s) {
 let answer = [],  arr=[]

s=s.slice(2,-2)

s.split('},{').forEach((v,i)=>{
arr.push(v.split(',').map((v)=>Number(v)))
})
arr.sort((a,b)=>a.length-b.length)


arr.forEach((v,i)=>{
 v.forEach((x,j)=>{
  if(!(answer.includes(x))) answer.push(x)
 })
})

 return answer

}