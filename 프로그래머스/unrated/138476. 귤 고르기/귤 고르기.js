function solution(k, tangerine) {
    let answer = 0,obj={}
tangerine.forEach(v=>obj[v]=++obj[v]||1)

let cnt=Object.values(obj).sort((a,b)=>b-a)

let count=0
 for(let i=0;i<cnt.length;i++){
  count+=cnt[i]
  if(count>=k)
   return i+1
 }

}