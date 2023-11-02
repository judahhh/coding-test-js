# [level 1] [카카오 인턴] 키패드 누르기 - 67256 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/67256) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.72 ms

### 구분

코딩테스트 연습 > 2020 카카오 인턴십

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2023년 11월 4일 18:44:31

### 문제 설명

<p style="user-select: auto;">스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.</p>

<p style="user-select: auto;"><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4b69a271-5f4a-4bf4-9ebf-6ebed5a02d8d/kakao_phone1.png" title="" alt="kakao_phone1.png" style="user-select: auto;"></p>

<p style="user-select: auto;">이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.<br style="user-select: auto;">
맨 처음 왼손 엄지손가락은 <code style="user-select: auto;">*</code> 키패드에 오른손 엄지손가락은 <code style="user-select: auto;">#</code> 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.</p>

<ol style="user-select: auto;">
<li style="user-select: auto;">엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.</li>
<li style="user-select: auto;">왼쪽 열의 3개의 숫자 <code style="user-select: auto;">1</code>, <code style="user-select: auto;">4</code>, <code style="user-select: auto;">7</code>을 입력할 때는 왼손 엄지손가락을 사용합니다.</li>
<li style="user-select: auto;">오른쪽 열의 3개의 숫자 <code style="user-select: auto;">3</code>, <code style="user-select: auto;">6</code>, <code style="user-select: auto;">9</code>를 입력할 때는 오른손 엄지손가락을 사용합니다.</li>
<li style="user-select: auto;">가운데 열의 4개의 숫자 <code style="user-select: auto;">2</code>, <code style="user-select: auto;">5</code>, <code style="user-select: auto;">8</code>, <code style="user-select: auto;">0</code>을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.<br style="user-select: auto;">
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.</li>
</ol>

<p style="user-select: auto;">순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.</p>

<h5 style="user-select: auto;"><strong style="user-select: auto;">[제한사항]</strong></h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">numbers 배열의 크기는 1 이상 1,000 이하입니다.</li>
<li style="user-select: auto;">numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.</li>
<li style="user-select: auto;">hand는 <code style="user-select: auto;">"left"</code> 또는 <code style="user-select: auto;">"right"</code> 입니다.

<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">"left"</code>는 왼손잡이, <code style="user-select: auto;">"right"</code>는 오른손잡이를 의미합니다.</li>
</ul></li>
<li style="user-select: auto;">왼손 엄지손가락을 사용한 경우는 <code style="user-select: auto;">L</code>, 오른손 엄지손가락을 사용한 경우는 <code style="user-select: auto;">R</code>을 순서대로 이어붙여 문자열 형태로 return 해주세요.</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;"><strong style="user-select: auto;">입출력 예</strong></h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">numbers</th>
<th style="user-select: auto;">hand</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]</td>
<td style="user-select: auto;"><code style="user-select: auto;">"right"</code></td>
<td style="user-select: auto;"><code style="user-select: auto;">"LRLLLRLLRRL"</code></td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]</td>
<td style="user-select: auto;"><code style="user-select: auto;">"left"</code></td>
<td style="user-select: auto;"><code style="user-select: auto;">"LRLLRRLLLRR"</code></td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]</td>
<td style="user-select: auto;"><code style="user-select: auto;">"right"</code></td>
<td style="user-select: auto;"><code style="user-select: auto;">"LLRLLRLLRL"</code></td>
</tr>
</tbody>
      </table>
<h5 style="user-select: auto;"><strong style="user-select: auto;">입출력 예에 대한 설명</strong></h5>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #1</strong></p>

<p style="user-select: auto;">순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">왼손 위치</th>
<th style="user-select: auto;">오른손 위치</th>
<th style="user-select: auto;">눌러야 할 숫자</th>
<th style="user-select: auto;">사용한 손</th>
<th style="user-select: auto;">설명</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">*</td>
<td style="user-select: auto;">#</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">L</td>
<td style="user-select: auto;">1은 왼손으로 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">#</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">R</td>
<td style="user-select: auto;">3은 오른손으로 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">L</td>
<td style="user-select: auto;">4는 왼손으로 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">L</td>
<td style="user-select: auto;">왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">8</td>
<td style="user-select: auto;">L</td>
<td style="user-select: auto;">왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">8</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">R</td>
<td style="user-select: auto;">왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">8</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">L</td>
<td style="user-select: auto;">1은 왼손으로 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">L</td>
<td style="user-select: auto;">4는 왼손으로 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">R</td>
<td style="user-select: auto;">왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">9</td>
<td style="user-select: auto;">R</td>
<td style="user-select: auto;">9는 오른손으로 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">9</td>
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">L</td>
<td style="user-select: auto;">왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">9</td>
<td style="user-select: auto;">-</td>
<td style="user-select: auto;">-</td>
<td style="user-select: auto;"></td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">따라서 <code style="user-select: auto;">"LRLLLRLLRRL"</code>를 return 합니다.</p>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #2</strong></p>

<p style="user-select: auto;">왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 <code style="user-select: auto;">"LRLLRRLLLRR"</code>이 됩니다.</p>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #3</strong></p>

<p style="user-select: auto;">오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 <code style="user-select: auto;">"LLRLLRLLRL"</code>이 됩니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges