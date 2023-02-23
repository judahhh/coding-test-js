function solution(lottos, win_nums) {
    let result = [0,0],same=0,cnt=0

same=lottos.filter(v=>win_nums.includes(v)).length
cnt=lottos.filter(v=>v==0).length
if(same==2)result[1]=5
else if(same==3)result[1]=4
else if(same==4)result[1]=3
else if(same==5)result[1]=2
else if(same==6)result[1]=1
else result[1]=6

result[0]=cnt==6?1:result[1]-cnt
 

    return result
}