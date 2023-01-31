function solution(s) {
   let answer = []
   let tu=s.slice(2,-2).split("},{").sort((a,b)=>a.length-b.length)
   tu.forEach(v=>{
    let str=v.split(",")
     answer.push(str.find(t=>!answer.includes(t)))
    })

    return answer.map(v=>Number(v))
}