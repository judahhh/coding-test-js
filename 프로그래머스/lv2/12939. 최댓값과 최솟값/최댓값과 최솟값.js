function solution(s) {
    var answer=[] ;
answer.push(Math.min(...s.split(" ")))
answer.push(Math.max(...s.split(" ")))
    return answer.join(" ")
}