# [level 2] 연속 부분 수열 합의 개수 - 131701 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131701) 

### 성능 요약

메모리: 61.6 MB, 시간: 5397.89 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">철호는 수열을 가지고 놀기 좋아합니다. 어느 날 철호는 어떤 자연수로 이루어진 원형 수열의 연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇 가지인지 알아보고 싶어졌습니다. 원형 수열이란 일반적인 수열에서 처음과 끝이 연결된 형태의 수열을 말합니다. 예를 들어 수열 [7, 9, 1, 1, 4] 로 원형 수열을 만들면 다음과 같습니다.<br style="user-select: auto;">
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f207cd37-34dc-4cbd-96bb-83435bd6efd4/%EA%B7%B8%EB%A6%BC.png" title="" alt="그림.png" style="user-select: auto;"><br style="user-select: auto;">
원형 수열은 처음과 끝이 연결되어 끊기는 부분이 없기 때문에 연속하는 부분 수열도 일반적인 수열보다 많아집니다.<br style="user-select: auto;">
원형 수열의 모든 원소 <code style="user-select: auto;">elements</code>가 순서대로 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">3 ≤ <code style="user-select: auto;">elements</code>의 길이 ≤ 1,000</li>
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">elements</code>의 원소 ≤ 1,000</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">elements</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">[7,9,1,1,4]</td>
<td style="user-select: auto;">18</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;">입출력 예 #1<br style="user-select: auto;">
길이가 1인 연속 부분 수열로부터 [1, 4, 7, 9] 네 가지의 합이 나올 수 있습니다.<br style="user-select: auto;">
길이가 2인 연속 부분 수열로부터 [2, 5, 10, 11, 16] 다섯 가지의 합이 나올 수 있습니다.<br style="user-select: auto;">
길이가 3인 연속 부분 수열로부터 [6, 11, 12, 17, 20] 다섯 가지의 합이 나올 수 있습니다.<br style="user-select: auto;">
길이가 4인 연속 부분 수열로부터 [13, 15, 18, 21] 네 가지의 합이 나올 수 있습니다.<br style="user-select: auto;">
길이가 5인 연속 부분 수열로부터 [22] 한 가지의 합이 나올 수 있습니다.<br style="user-select: auto;">
이들 중 중복되는 값을 제외하면 다음과 같은 18가지의 수들을 얻습니다.<br style="user-select: auto;">
[1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22]</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges