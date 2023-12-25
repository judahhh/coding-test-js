def solution(phone_number):
    answer = list(reversed(list(phone_number)))
    for i,val in enumerate(answer):
        if i>3:
            answer[i]='*'
    return ''.join(list(reversed(answer)))