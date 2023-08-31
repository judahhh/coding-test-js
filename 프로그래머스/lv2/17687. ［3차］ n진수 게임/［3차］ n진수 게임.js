function solution(n, t, m, p) {
 let answer = '',result=''

 for(let i=0;i<=t*m*100;i++){
  answer+=(i.toString(n))
 }
answer=answer.split('')
for(let i=p-1;i<t*m;i+=m){
if(!Number(answer[i])) result+=answer[i].toUpperCase()
else result+=answer[i] 
if(result.length==t){
return result
break
 }
}
return result

}