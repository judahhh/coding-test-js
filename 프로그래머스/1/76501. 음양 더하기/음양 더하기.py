def solution(absolutes, signs):
    answer = 0
    for i in range(len(absolutes)):
        print(i,signs[i],absolutes[i])
        if signs[i]==True:
            answer+=absolutes[i]
        else:
            answer+=(-1)*absolutes[i]
    return answer