function solution(n, s) {
    if(n>s) return [-1]
    let q=parseInt(s/n)
    let r=s%n
    let answer= Array(n).fill(q)

    while(r){
     answer[r]++
     r--
    }

    return answer.sort()
}