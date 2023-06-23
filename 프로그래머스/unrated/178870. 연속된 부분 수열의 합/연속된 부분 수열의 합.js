function solution(sequence, k) {
    let answer = [], start=0, end=0, sum=sequence[0]

   while(end<sequence.length){

   if(sum<k)sum+=sequence[++end]
   else if(sum>k)sum-=sequence[start++]
   else {
    answer.push([start,end])
    sum-=sequence[start++]
    sum+=sequence[++end]
   }
  }


    return answer.sort((a,b)=>(a[1]-a[0])-(b[1]-b[0]))[0]
}