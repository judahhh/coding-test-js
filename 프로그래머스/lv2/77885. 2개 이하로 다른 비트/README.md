# [level 2] 2개 이하로 다른 비트 - 77885 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/77885#) 

### 성능 요약

메모리: 58.8 MB, 시간: 184.93 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌2

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">양의 정수 <code style="user-select: auto;">x</code>에 대한 함수 <code style="user-select: auto;">f(x)</code>를 다음과 같이 정의합니다.</p>

<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">x</code>보다 크고 <code style="user-select: auto;">x</code>와 <strong style="user-select: auto;">비트가 1~2개 다른</strong> 수들 중에서 제일 작은 수</li>
</ul>

<p style="user-select: auto;">예를 들어, </p>

<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">f(2) = 3</code> 입니다. 다음 표와 같이 2보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 3이기 때문입니다.</li>
</ul>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">수</th>
<th style="user-select: auto;">비트</th>
<th style="user-select: auto;">다른 비트의 개수</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;"><code style="user-select: auto;">000...0010</code></td>
<td style="user-select: auto;"></td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">3</td>
<td style="user-select: auto;"><code style="user-select: auto;">000...0011</code></td>
<td style="user-select: auto;">1</td>
</tr>
</tbody>
      </table>
<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">f(7) = 11</code> 입니다. 다음 표와 같이 7보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 11이기 때문입니다.</li>
</ul>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">수</th>
<th style="user-select: auto;">비트</th>
<th style="user-select: auto;">다른 비트의 개수</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">7</td>
<td style="user-select: auto;"><code style="user-select: auto;">000...0111</code></td>
<td style="user-select: auto;"></td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">8</td>
<td style="user-select: auto;"><code style="user-select: auto;">000...1000</code></td>
<td style="user-select: auto;">4</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">9</td>
<td style="user-select: auto;"><code style="user-select: auto;">000...1001</code></td>
<td style="user-select: auto;">3</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">10</td>
<td style="user-select: auto;"><code style="user-select: auto;">000...1010</code></td>
<td style="user-select: auto;">3</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">11</td>
<td style="user-select: auto;"><code style="user-select: auto;">000...1011</code></td>
<td style="user-select: auto;">2</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">정수들이 담긴 배열 <code style="user-select: auto;">numbers</code>가 매개변수로 주어집니다. <code style="user-select: auto;">numbers</code>의 모든 수들에 대하여 각 수의 <code style="user-select: auto;">f</code> 값을 배열에 차례대로 담아 return 하도록 solution 함수를 완성해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">numbers</code>의 길이 ≤ 100,000</li>
<li style="user-select: auto;">0 ≤ <code style="user-select: auto;">numbers</code>의 모든 수 ≤ 10<sup style="user-select: auto;">15</sup></li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">numbers</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;"><code style="user-select: auto;">[2,7]</code></td>
<td style="user-select: auto;"><code style="user-select: auto;">[3,11]</code></td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #1</strong></p>

<ul style="user-select: auto;">
<li style="user-select: auto;">문제 예시와 같습니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges