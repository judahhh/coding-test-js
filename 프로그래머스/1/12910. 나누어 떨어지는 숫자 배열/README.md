# [level 1] 나누어 떨어지는 숫자 배열 - 12910 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12910) 

### 성능 요약

메모리: 10.3 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2023년 12월 1일 18:47:22

### 문제 설명

<p style="user-select: auto !important;">array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.<br style="user-select: auto !important;">
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요. </p>

<h5 style="user-select: auto !important;">제한사항</h5>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">arr은 자연수를 담은 배열입니다.</li>
<li style="user-select: auto !important;">정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.</li>
<li style="user-select: auto !important;">divisor는 자연수입니다.</li>
<li style="user-select: auto !important;">array는 길이 1 이상인 배열입니다.</li>
</ul>

<h5 style="user-select: auto !important;">입출력 예</h5>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">arr</th>
<th style="user-select: auto !important;">divisor</th>
<th style="user-select: auto !important;">return</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;">[5, 9, 7, 10]</td>
<td style="user-select: auto !important;">5</td>
<td style="user-select: auto !important;">[5, 10]</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">[2, 36, 1, 3]</td>
<td style="user-select: auto !important;">1</td>
<td style="user-select: auto !important;">[1, 2, 3, 36]</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;">[3,2,6]</td>
<td style="user-select: auto !important;">10</td>
<td style="user-select: auto !important;">[-1]</td>
</tr>
</tbody>
      </table>
<h5 style="user-select: auto !important;">입출력 예 설명</h5>

<p style="user-select: auto !important;">입출력 예#1<br style="user-select: auto !important;">
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.</p>

<p style="user-select: auto !important;">입출력 예#2<br style="user-select: auto !important;">
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.</p>

<p style="user-select: auto !important;">입출력 예#3<br style="user-select: auto !important;">
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges