function solution(record) {
    let answer = [],obj={}
  record.forEach(v=>{
let [type,id,name]=v.split(" ")

if(type!=="Leave")
obj[id]=name

  })

record.forEach(v=>{
let [type,id,name]=v.split(" ")
if(type=="Enter")
answer.push(`${obj[id]}님이 들어왔습니다.`)
if(type=="Leave")
answer.push(`${obj[id]}님이 나갔습니다.`)
})
    return answer
}