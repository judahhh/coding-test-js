function solution(n, left, right) {
   let answer=[],x=left%n,y=parseInt(left/n)
  for (let i=left;i<=right;i++){
     answer.push(Math.max(x,y)+1)
   if(x+1<n)x++
   else{
    y++
    x=0
   }

  }

    return answer
}