function solution(n) {
    let answer = '', numOnly=[4,1,2]

   while(n>0){
    answer+=numOnly[n%3]
    n=(n%3==0)?parseInt(n/3)-1:parseInt(n/3)
   }

    return answer.split('').reverse().join('')
}