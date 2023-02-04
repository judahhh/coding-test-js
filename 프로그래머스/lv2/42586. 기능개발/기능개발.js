function solution(progresses, speeds) {

    let answer = [],rest=[]
for(let i=0;i<progresses.length;i++){
   progresses[i]=Math.ceil((100-progresses[i])/speeds[i])

    if(i!=0&&progresses[i-1]>progresses[i])
       progresses[i]=progresses[i-1]
}
console.log(progresses)

let i=0
while(progresses.length){
answer.push([...progresses].filter(v=>v==progresses[i]).length)
progresses=progresses.filter(v=>v!==progresses[i])
}

    return answer
}

