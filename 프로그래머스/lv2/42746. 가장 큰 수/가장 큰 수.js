function solution(numbers) {
    let answer = ''

answer=numbers.map(v=>v+"").sort((a,b)=>{
return (b+a)*1-(a+b)*1
})
//answer=answer[0]===0?'0':answer
    return answer[0]==0?'0':answer.join('')
}