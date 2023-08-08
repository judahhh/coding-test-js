/*function solution(skill, skill_trees) {
  let answer = 0
  let filtered=skill_trees.map(v=>{
   return  v.split('').filter(x=>skill.includes(x))
  })

 filtered.forEach((v,i)=>{
 let order=true
  v.forEach((x,j)=>{
    if(skill[j]!==x){
     order=false
    }
   })
  if(order==true) answer++
 })

    return answer;
}


*/






/* 방법2

function solution(skill, skill_trees) {
    let answer = 0;

    const regExp = new RegExp(`[^${skill}]`,"g");

    skill_trees.forEach(function(item) {
        if( skill.indexOf(item.replace(regExp,'')) === 0 ) 
            ++answer;
    })

    return answer;
}

*/










function solution(skill,skill_trees){
  let index=0, answer=0
// skill=skill.split('')

skill_trees= skill_trees.map(v=>{
 return v.split('').filter(x=>skill.includes(x)).join('')
 })

skill_trees.forEach(v=>{
 if(skill.includes(v) && skill.indexOf(v)==0) answer++

})
console.log(skill_trees)
return answer

}
