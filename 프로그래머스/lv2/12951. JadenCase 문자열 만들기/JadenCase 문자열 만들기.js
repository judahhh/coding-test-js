function solution(s) {
    var answer =''
s=s.split(" ").map(v=>v.toLowerCase())
s=s.map(v=>{
v=v.split("")
if(v[0]==undefined) return 
v[0]= v[0].toUpperCase()

return v.join("")
})

return s.join(" ")

}