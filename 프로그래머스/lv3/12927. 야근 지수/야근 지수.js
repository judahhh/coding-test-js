function solution(n, works) {
    
 works.sort((a,b)=>a-b)
 if(works.reduce((a,b)=>a+b,0)<n) return 0

  const len = works.length
  
  while(n) {
    const max = works[len-1]
    
    for(let i = len-1; i >= 0; i--) {
      if(works[i] >= max) {
       works[i]--
        n--
      }
      if(n==0) break
    }
  }

    return works.map(v=>v**2).reduce((a,b)=>a+b,0)
}