function solution(cards1, cards2, goal) {
    let answer = 'Yes'

for(let i=0;i<goal.length;i++){

 if(cards1[0]==goal[i]){
  cards1.splice(0,1)
  continue
 }
 else if(cards2[0]==goal[i]){
 cards2.splice(0,1)
continue
  }
 else return 'No'
}

    return answer
}