function solution(k, dungeons) {
    let answer = [], visit=Array(dungeons.length).fill(false)
let len=dungeons.length

function dfs(cnt,k){
answer.push(cnt)
for(let i=0;i<len;i++){
if(k>=dungeons[i][0]&&visit[i]==false){
  visit[i]=true 
  dfs(cnt+1,k-dungeons[i][1])
  visit[i]=false
 }
 }

}
dfs(0,k)

  
    return Math.max(...answer)
}