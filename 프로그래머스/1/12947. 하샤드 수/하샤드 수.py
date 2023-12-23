def solution(x):
    answer = True
    N=[int(i) for i in str(x)]
    return x%sum(N)==0