function solution(s) {
   let answer = 0,flag
    if (s.length % 2 === 1) return 0;
   for(let i=0;i<s.length;i++){
   flag=1
   let str=s.slice(i)+s.slice(0,i)
   const stack=[]
   for(const v of str){
    if(v=='('||v=='{'||v=='[')stack.push(v)
    else{
      let brac=stack.pop()
      if(brac=='('&& v==')')continue
      if(brac=='{'&& v=='}')continue
      if(brac=='['&& v==']')continue
       flag=0
        break
     }
   }
if(flag)answer++
   }
    return answer
}

