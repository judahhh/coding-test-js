# [unrated] 연속된 부분 수열의 합 - 178870 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/178870) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">비내림차순으로 정렬된 수열이 주어질 때, 다음 조건을 만족하는 부분 수열을 찾으려고 합니다.</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">기존 수열에서 임의의 두 인덱스의 원소와 그 사이의 원소를 모두 포함하는 부분 수열이어야 합니다.</li>
<li style="user-select: auto;">부분 수열의 합은 <code style="user-select: auto;">k</code>입니다.</li>
<li style="user-select: auto;">합이 <code style="user-select: auto;">k</code>인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾습니다.</li>
<li style="user-select: auto;">길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾습니다.</li>
</ul>

<p style="user-select: auto;">수열을 나타내는 정수 배열 <code style="user-select: auto;">sequence</code>와 부분 수열의 합을 나타내는 정수 <code style="user-select: auto;">k</code>가 매개변수로 주어질 때, 위 조건을 만족하는 부분 수열의 시작 인덱스와 마지막 인덱스를 배열에 담아 return 하는 solution 함수를 완성해주세요. 이때 수열의 인덱스는 0부터 시작합니다.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">5 ≤ <code style="user-select: auto;">sequence</code>의 길이 ≤ 1,000,000

<ul style="user-select: auto;">
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">sequence</code>의 원소 ≤ 1,000</li>
<li style="user-select: auto;"><code style="user-select: auto;">sequence</code>는 비내림차순으로 정렬되어 있습니다.</li>
</ul></li>
<li style="user-select: auto;">5 ≤ <code style="user-select: auto;">k</code> ≤ 1,000,000,000

<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">k</code>는 항상 <code style="user-select: auto;">sequence</code>의 부분 수열로 만들 수 있는 값입니다.</li>
</ul></li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">sequence</th>
<th style="user-select: auto;">k</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">[1, 2, 3, 4, 5]</td>
<td style="user-select: auto;">7</td>
<td style="user-select: auto;">[2, 3]</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">[1, 1, 1, 2, 3, 4, 5]</td>
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">[6, 6]</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">[2, 2, 2, 2, 2]</td>
<td style="user-select: auto;">6</td>
<td style="user-select: auto;">[0, 2]</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;">입출력 예 #1</p>

<p style="user-select: auto;">[1, 2, 3, 4, 5]에서 합이 7인 연속된 부분 수열은 [3, 4]뿐이므로 해당 수열의 시작 인덱스인 2와 마지막 인덱스 3을 배열에 담아 [2, 3]을 반환합니다.</p>

<p style="user-select: auto;">입출력 예 #2</p>

<p style="user-select: auto;">[1, 1, 1, 2, 3, 4, 5]에서 합이 5인 연속된 부분 수열은 [1, 1, 1, 2], [2, 3], [5]가 있습니다. 이 중 [5]의 길이가 제일 짧으므로 해당 수열의 시작 인덱스와 마지막 인덱스를 담은 [6, 6]을 반환합니다.</p>

<p style="user-select: auto;">입출력 예 #3</p>

<p style="user-select: auto;">[2, 2, 2, 2, 2]에서 합이 6인 연속된 부분 수열은 [2, 2, 2]로 3가지 경우가 있는데, 길이가 짧은 수열이 여러 개인 경우 앞쪽에 나온 수열을 찾으므로 [0, 2]를 반환합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges