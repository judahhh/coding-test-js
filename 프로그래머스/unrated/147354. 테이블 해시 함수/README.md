# [unrated] 테이블 해시 함수 - 147354 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/147354) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">완호가 관리하는 어떤 데이터베이스의 한 테이블은 모두 정수 타입인 컬럼들로 이루어져 있습니다. 테이블은 2차원 행렬로 표현할 수 있으며 열은 컬럼을 나타내고, 행은 튜플을 나타냅니다.<br style="user-select: auto;">
첫 번째 컬럼은 기본키로서 모든 튜플에 대해 그 값이 중복되지 않도록 보장됩니다. 완호는 이 테이블에 대한 해시 함수를 다음과 같이 정의하였습니다.</p>

<ol style="user-select: auto;">
<li style="user-select: auto;">해시 함수는 <code style="user-select: auto;">col</code>, <code style="user-select: auto;">row_begin</code>, <code style="user-select: auto;">row_end</code>을 입력으로 받습니다.</li>
<li style="user-select: auto;">테이블의 튜플을 <code style="user-select: auto;">col</code>번째 컬럼의 값을 기준으로 오름차순 정렬을 하되, 만약 그 값이 동일하면 기본키인 첫 번째 컬럼의 값을 기준으로 내림차순 정렬합니다.</li>
<li style="user-select: auto;">정렬된 데이터에서 S_i를 i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의합니다.</li>
<li style="user-select: auto;"><code style="user-select: auto;">row_begin</code> ≤ i ≤ <code style="user-select: auto;">row_end</code> 인 모든 S_i를 누적하여 bitwise XOR 한 값을 해시 값으로서 반환합니다.</li>
</ol>

<p style="user-select: auto;">테이블의 데이터 <code style="user-select: auto;">data</code>와 해시 함수에 대한 입력 <code style="user-select: auto;">col</code>, <code style="user-select: auto;">row_begin</code>, <code style="user-select: auto;">row_end</code>이 주어졌을 때 테이블의 해시 값을 return 하도록 solution 함수를 완성해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한 사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">data</code>의 길이 ≤ 2,500</li>
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">data</code>의 원소의 길이 ≤ 500</li>
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">data</code>[i][j] ≤ 1,000,000

<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">data</code>[i][j]는 i + 1 번째 튜플의 j + 1 번째 컬럼의 값을 의미합니다.</li>
</ul></li>
<li style="user-select: auto;">1 ≤ col ≤ <code style="user-select: auto;">data</code>의 원소의 길이</li>
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">row_begin</code> ≤ <code style="user-select: auto;">row_end</code> ≤ <code style="user-select: auto;">data</code>의 길이</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">data</th>
<th style="user-select: auto;">col</th>
<th style="user-select: auto;">row_begin</th>
<th style="user-select: auto;">row_end</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">[[2,2,6],[1,5,10],[4,2,9],[3,8,3]]</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">4</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">정해진 방법에 따라 튜플을 정렬하면 {4, 2, 9}, {2, 2, 6}, {1, 5, 10}, {3, 8, 3} 이 됩니다.</li>
<li style="user-select: auto;">S_2 = (2 mod 2) + (2 mod 2) + (6 mod 2) = 0 입니다.</li>
<li style="user-select: auto;">S_3 = (1 mod 3) + (5 mod 3) + (10 mod 3) = 4 입니다.</li>
<li style="user-select: auto;">따라서 해시 값은 S_2 XOR S_ 3 = 4 입니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges