function solution(n, m, section) {
 let answer = 0,maxIndex=0

section.forEach(v=>{
 if(v>maxIndex) {
  answer++
  maxIndex=v+m-1
 }
})

 return answer
}