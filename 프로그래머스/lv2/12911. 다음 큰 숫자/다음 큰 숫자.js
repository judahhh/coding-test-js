function solution(n) {
    var answer = 0,num;
num=n.toString(2).split("").filter(v=>v==1).length
for(let i=n+1;;i++){
if(i.toString(2).split("").filter(v=>v==1).length==num){
return i
}

}
    
}