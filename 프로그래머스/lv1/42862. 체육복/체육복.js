function solution(n, lost, reserve) {
    let answer
lost.sort((a,b)=>a-b)
reserve.sort((a,b)=>a-b)

let intersection=lost.filter(v=>reserve.includes(v))
lost=lost.filter(v=>!intersection.includes(v))
reserve=reserve.filter(v=>!intersection.includes(v))
answer=n-lost.length


for(let i=0;i<lost.length;i++){

 if(reserve.includes(lost[i]-1)) {
  reserve.splice(reserve.indexOf(lost[i]-1),1)
  answer++
 }
 else if(reserve.includes(lost[i]+1)) {
  reserve.splice(reserve.indexOf(lost[i]+1),1)
  answer++
 }
}
    return answer
}