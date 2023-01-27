function solution(num, k) {
    let stack=[];
 num=num.split("")
for(let i=0;i<num.length;i++){
if(stack.length==0) {
stack.push(num[i])
continue
 }

while(k>0&&num[i]>stack[stack.length-1]){
stack.pop();
k--
}
stack.push(num[i])
}
stack.splice(num.length-k,k)

    return stack.join("")
}