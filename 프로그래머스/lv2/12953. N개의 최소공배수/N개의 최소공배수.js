function solution(arr) {
    var answer = 0;
answer=arr[0]
for(let i=0;i<arr.length-1;i++){

for(let j=answer;j<=answer*arr[i+1];j++){

if(j%answer==0 && j%arr[i+1]==0){
console.log(j)
answer=j
break
}

}
}
    return answer;
}