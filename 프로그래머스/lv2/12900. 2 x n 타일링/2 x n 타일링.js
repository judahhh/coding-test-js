function solution(n) {
 let answer = 0,x=[0,1,2]
//결과 : n을 1과 2로 쪼개는 방법의 수

for(let i=3;i<=n;i++){
x.push((x[i-1]%1000000007+x[i-2]%1000000007))

}
 return x[n]%1000000007
}