def solution(arr):
    answer = []
    minValue=min(arr) 
    arr.remove(minValue)
    if len(arr)==0:
        return [-1]
    return arr