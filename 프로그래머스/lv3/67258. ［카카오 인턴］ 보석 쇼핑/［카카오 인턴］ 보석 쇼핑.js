function solution(gems) {
    const gemVarietyCounts = new Set(gems).size;
    const gemMap = new Map();
    const answer = [];

    gems.forEach((gem,i) => {
        gemMap.delete(gem);
        gemMap.set(gem,i);
        if(gemMap.size === gemVarietyCounts) {
            answer.push([gemMap.values().next().value + 1, i + 1 ]);
        }});

    return answer.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
  
}