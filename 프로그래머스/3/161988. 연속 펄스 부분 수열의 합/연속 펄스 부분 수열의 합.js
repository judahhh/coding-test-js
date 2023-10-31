function solution(sequence) {
 let answer =0, plus=[], minus=[]
if(sequence.length==1&&sequence[0]<0)return (-1)*sequence[0]
if(sequence.length==1&&sequence[0]>=0) return sequence[0]

sequence.forEach((v,i)=>{
if(i==0){
 plus.push(sequence[i])
 minus.push((-1)*sequence[i]) 
} 

else if(i%2==1) {
plus.push(Math.max((-1)*sequence[i],plus[i-1]-sequence[i]))
minus.push(Math.max(sequence[i],minus[i-1]+sequence[i]))
}
else {
plus.push(Math.max(sequence[i],plus[i-1]+sequence[i]))
minus.push(Math.max((-1)*sequence[i],minus[i-1]-sequence[i]))
 }

answer=Math.max(plus[i],minus[i],answer)
})


    return answer
}