function solution(elements) {
    const len = elements.length
    const set = new Set()
    for(let i=1; i<=len; i++) {// 수열의 길이 만큼 반복하며, i의 길이만큼 자른다.(부분 수열)
      elements.forEach((v,j)=>{
       let re=(j+i)%len
        if(j+i>len)
         set.add([...elements.slice(0,re),...elements.slice(j,j+i)].reduce((a,b)=>a+b,0))
        else
         set.add([...elements.slice(j,j+i)].reduce((a,b)=>a+b,0))
      })
    }
    return set.size;
}