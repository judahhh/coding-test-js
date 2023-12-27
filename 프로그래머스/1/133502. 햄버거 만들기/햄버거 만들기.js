function solution(ingredient) {
    let answer = 0
    let stack=[]
    ingredient.forEach(v=>{
      stack.push(v)
        if(stack.slice(-4).join('')=='1231') {
            stack.splice(-4)
            answer++
        }
    })
    return answer
}