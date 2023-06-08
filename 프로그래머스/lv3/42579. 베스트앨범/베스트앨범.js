function solution(genres, plays) {
    let answer = [],obj={}

    genres.forEach((v,i)=>{

    obj[v]= obj[v]?(obj[v]+plays[i]):plays[i]

})
console.log(obj.length)
    return answer
}