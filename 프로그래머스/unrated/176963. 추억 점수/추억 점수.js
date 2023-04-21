function solution(name, yearning, photo) {
    let answer = [],obj={}
name.forEach((v,i)=>{obj[v]=yearning[i]})

photo.forEach((v,i)=>{
 let sum=0
  v.forEach(vv=>{
   obj[vv]==null?sum+=0:sum+=obj[vv]
  })
  answer.push(sum)
})

    return answer
}