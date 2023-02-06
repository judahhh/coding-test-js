function solution(N, stages) {
    let result =[]
  for(let i=1;i<=N;i++){
   let tmp=[...stages].filter(v=>v>i).length
   let all=[...stages].filter(v=>v>=i).length
result.push([i,1-tmp/all])
}
console.log(result)
result=result.sort((a,b)=>
b[1]-a[1]
)
console.log(result)
    return result.map(v=>v[0])
}