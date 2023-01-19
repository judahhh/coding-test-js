function solution(s){
let stack=[];
s=s.split("")
for(const v of s){
if(stack[stack.length-1]=='('&&v==')') stack.pop()
else stack.push(v)

}
    

    return stack.length==0?true:false;
}