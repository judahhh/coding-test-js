# [level 2] H-Index - 42747 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42747) 

### 성능 요약

메모리: 33.2 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 정렬

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과<sup id="fnref1" style="user-select: auto;"><a href="#fn1" style="user-select: auto;">1</a></sup>에 따르면, H-Index는 다음과 같이 구합니다.</p>

<p style="user-select: auto;">어떤 과학자가 발표한 논문 <code style="user-select: auto;">n</code>편 중, <code style="user-select: auto;">h</code>번 이상 인용된 논문이 <code style="user-select: auto;">h</code>편 이상이고 나머지 논문이 h번 이하 인용되었다면 <code style="user-select: auto;">h</code>의 최댓값이 이 과학자의 H-Index입니다.</p>

<p style="user-select: auto;">어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.</p>

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.</li>
<li style="user-select: auto;">논문별 인용 횟수는 0회 이상 10,000회 이하입니다.</li>
</ul>

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">citations</th>
<th style="user-select: auto;">return</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">[3, 0, 6, 1, 5]</td>
<td style="user-select: auto;">3</td>
</tr>
</tbody>
      </table>
<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;">이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.</p>

<h5 style="user-select: auto;">문제가 잘 안풀린다면😢</h5>

<p style="user-select: auto;">힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → <a href="https://school.programmers.co.kr/learn/courses/14743?itm_content=lesson42747" target="_blank" rel="noopener" style="user-select: auto;">클릭</a></p>

<p style="user-select: auto;">※ 공지 - 2019년 2월 28일 테스트 케이스가 추가되었습니다.</p>

<div class="footnotes" style="user-select: auto;">
<hr style="user-select: auto;">
<ol style="user-select: auto;">

<li id="fn1" style="user-select: auto;">
<p style="user-select: auto;"><a href="https://en.wikipedia.org/wiki/H-index" target="_blank" rel="noopener" style="user-select: auto;">https://en.wikipedia.org/wiki/H-index</a> "위키백과"&nbsp;<a href="#fnref1" style="user-select: auto;">↩</a></p>
</li>

</ol>
</div>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges