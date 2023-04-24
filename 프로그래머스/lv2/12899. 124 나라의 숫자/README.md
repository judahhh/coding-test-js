# [level 2] 124 나라의 숫자 - 12899 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12899) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.</p>

<ol style="user-select: auto;">
<li style="user-select: auto;">124 나라에는 자연수만 존재합니다.</li>
<li style="user-select: auto;">124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.</li>
</ol>

<p style="user-select: auto;">예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">10진법</th>
<th style="user-select: auto;">124 나라</th>
<th style="user-select: auto;">10진법</th>
<th style="user-select: auto;">124 나라</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">6</td>
<td style="user-select: auto;">14</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">7</td>
<td style="user-select: auto;">21</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">8</td>
<td style="user-select: auto;">22</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">11</td>
<td style="user-select: auto;">9</td>
<td style="user-select: auto;">24</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">12</td>
<td style="user-select: auto;">10</td>
<td style="user-select: auto;">41</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.</p>

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">n은 50,000,000이하의 자연수 입니다.</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">n</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">1</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">4</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">11</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<p style="user-select: auto;">※ 공지 - 2022년 9월 5일 제한사항이 수정되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges