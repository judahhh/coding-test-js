function solution(x, y) {
    let same=[],tmp,idxArr=Array(10).fill(0)
x=x.split('')
y=y.split('')

if(x.length>y.length){
tmp=x
x=y
y=tmp
}

for(let i=0;i<x.length;i++){
//if(y.includes(v)) {
//same.push(v)
//y.splice(y.indexOf(v),1)
   let idx = y.indexOf(x[i], idxArr[x[i]]);
    if (idx === -1) continue;
    same.push(x[i]);
    idxArr[x[i]] = idx + 1;
}

  if(same.length==0)return "-1"
  if([...new Set(same)]=="0")return "0"
  return same.map(Number).sort((a,b)=>b-a).join('')
}