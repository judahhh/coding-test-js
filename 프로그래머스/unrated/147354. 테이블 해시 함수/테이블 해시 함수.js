function solution(data, col, row_begin, row_end) {
 let result=0;


data.sort((a,b)=>a[col-1]-b[col-1]==0? b[0]-a[0]:a[col-1]-b[col-1])

for(let i=row_begin-1;i<=row_end-1;i++){
let line=0
 for(let j=0;j<data[0].length;j++){
 line+=(data[i][j]%(i+1) )

 }
 result^=line
}
return result
}

