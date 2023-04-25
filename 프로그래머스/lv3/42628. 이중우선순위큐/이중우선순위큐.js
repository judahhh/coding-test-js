function solution(operations) {
    let answer = [], Q=[]

    operations.forEach((v,i)=>{
     if(v[0]==='I'){
       let x=v.split(' ')
       Q.push(Number(x[1]))
       }
     if(v==="D -1")Q.splice(Q.length-1,1)
     if(v==="D 1") Q.splice(0,1)

     Q.sort((a,b)=>b-a)
    })

    if(Q.length===0) return [0,0]
    
    answer.push(Math.max(...Q))
    answer.push(Math.min(...Q))

    return answer
}