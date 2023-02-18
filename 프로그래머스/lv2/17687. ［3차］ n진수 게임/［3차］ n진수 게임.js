function solution(n, t, m, p) {
    let answer = [], num=0,gamestr=''

while(gamestr.length<t*m){
gamestr+=(num++).toString(n).toUpperCase()
}
for(let i=p-1;i<t*m;i+=m)
answer+=gamestr[i]

return answer
}