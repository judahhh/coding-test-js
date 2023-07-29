function solution(topping) {
  let answer = 0;
  let OB=new Map(), YB=new Map()
  
topping.forEach(v=>{
 OB.has(v) ? OB.set( v , OB.get(v)+1 ) : OB.set(v,1)
 })

topping.forEach(v=>{
 YB.has(v) ? YB.set( v , YB.get(v)+1 ) : YB.set(v,1)
 OB.get(v) !==1 ? OB.set( v , OB.get(v)-1) : OB.delete(v)

if(YB.size===OB.size) answer++
 })

  return answer;
}
