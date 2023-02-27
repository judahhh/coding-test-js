function solution(dirs) {
    let answer = 0,coordinate=[],now=[0,0]
   
    dirs.split('').forEach(v=>{

     let before=[now[0],now[1]]

      if(now[1]!==5&&v=='U') now[1]++
      else if(now[1]!==-5&&v=='D') now[1]--
      else if(now[0]!==-5&&v=='L') now[0]--
      else if(now[0]!==5&&v=='R') now[0]++

      if((before[0]!==now[0]||before[1]!==now[1])&&
          coordinate.includes(`${before[0]},${before[1]},${now[0]},${now[1]}`)==false&&
          coordinate.includes(`${now[0]},${now[1]},${before[0]},${before[1]}`)==false
          ){ 
          coordinate.push(`${before[0]},${before[1]},${now[0]},${now[1]}`)
          answer++
          }

    })
    return answer
}