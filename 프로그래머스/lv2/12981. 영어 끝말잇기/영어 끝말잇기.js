function solution(n, words) {
    let answer = [0,0]

for(let i=1;i<words.length;i++){
if(i>words.indexOf(words[i])||words[i][0]!=words[i-1][words[i-1].length-1]){
answer[0]=(i%n+1)
answer[1]=Math.ceil((i+1)/n)
break
}

}


return answer
}