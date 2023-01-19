function solution(s) {
   let answer = [0,0],len;
    
while(s!="1"){
len=s.length
answer[1]+=len-s.split("").filter(v=>v=="1").length
s=(s.split("").filter(v=>v=="1").length).toString(2)

answer[0]++
//if(answer[0]>5)break
}
    return answer;
}