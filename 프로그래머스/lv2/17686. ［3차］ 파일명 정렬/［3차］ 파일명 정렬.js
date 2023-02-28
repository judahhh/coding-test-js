

function solution(files) {
    let answer = [],fileobj=[]

   files.forEach(file=>{
let number='',head='',tail='';
[...file].forEach(v=>{
if(isNaN(parseInt(v))&&number.length==0)head+=v
else if(!isNaN(parseInt(v))&&tail.length==0)number+=v
else tail+=v
})
  //let number=Number(files[i].split('').filter(v=> v>='0'&&v<='9').join(''))
  // if((number+"").length>5)number=Number((number+"").split('').slice(0,5).join(''))
  // let head=files[i].split(number)[0]
//   if(head.includes(0)) head=head.split('').filter(v=>v!=0).join('')
   fileobj.push({name:file,head:head,number:+number})

   })
  console.log(fileobj)
 fileobj.sort((a,b)=> a.number-b.number)
 fileobj.sort((a,b)=> a.head.toLowerCase()<b.head.toLowerCase()?-1:1)
for(let i=0;i<fileobj.length;i++){
 answer.push(fileobj[i].name)
 }

    return answer
}

