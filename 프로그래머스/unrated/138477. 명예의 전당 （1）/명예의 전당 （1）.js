function solution(k, score) {
    let result = [],king=[]

    score.forEach((v,i)=>{

king.sort((a,b)=>b-a)

if(i<k)king.push(v)
else{
if(Math.min(...king)<v){
king.pop()
king.push(v)
}
}
result.push(Math.min(...king))
  })
    
    return result
}