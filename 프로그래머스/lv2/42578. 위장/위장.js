function solution(clothes) {
    let answer = 1,obj={}
    for(const v of clothes)
    {
     if(! obj[v[1]])obj[v[1]]=0
      obj[v[1]]+=1
    }
    
    for(const v in obj){
   answer*=obj[v]+1
  
     }
   return answer-1
}