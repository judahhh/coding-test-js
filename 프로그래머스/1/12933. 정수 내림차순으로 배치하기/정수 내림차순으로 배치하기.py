def solution(n):
    arr=list(str(n))
    answer=list(map(int,arr))
    return int(''.join(map(str,sorted(answer,reverse=True))))