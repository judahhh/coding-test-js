function solution(k, m, score) {//k:최상품점수 m:담을개수 score:각 사과의 점수 배열
   let answer = 0,len=score.length
   score.sort((a,b)=>b-a)

  for(let i=m-1;i<len;i+=m)
  answer+=m*score[i]

    return answer
}