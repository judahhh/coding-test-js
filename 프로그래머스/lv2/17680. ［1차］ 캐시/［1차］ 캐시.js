function solution(cacheSize, cities) {
    let answer = 0,cMemory=[];
    cities=cities.map(v=>v.toLowerCase())

    for(const v of cities){
     if(cMemory.includes(v)){
       answer+=1
       cMemory.splice(cMemory.indexOf(v),1)
     }
     else answer+=5
  
        cMemory.push(v)
    

     if(cacheSize<cMemory.length) {
       cMemory.shift()
  
      }
    }

    
    
    return answer
}