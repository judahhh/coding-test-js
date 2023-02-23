function solution(lottos, win_nums) {
    let result = [0,0],same=0,cnt=0
    lottos.forEach((v,i)=>{
   if(win_nums.includes(v)) 
    same++
   if(v==0) cnt++
   })
if(same==2)result[1]=5
else if(same==3)result[1]=4
else if(same==4)result[1]=3
else if(same==5)result[1]=2
else if(same==6)result[1]=1
else result[1]=6

result[0]=cnt==6?1:result[1]-cnt
 

    return result
}