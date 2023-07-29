# [unrated] 카테고리 별 도서 판매량 집계하기 - 144855 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/144855) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > GROUP BY

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">다음은 어느 한 서점에서 판매중인 도서들의 도서 정보(<code style="user-select: auto;">BOOK</code>), 판매 정보(<code style="user-select: auto;">BOOK_SALES</code>) 테이블입니다.</p>

<p style="user-select: auto;"><code style="user-select: auto;">BOOK</code> 테이블은 각 도서의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">Column name</th>
<th style="user-select: auto;">Type</th>
<th style="user-select: auto;">Nullable</th>
<th style="user-select: auto;">Description</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">BOOK_ID</td>
<td style="user-select: auto;">INTEGER</td>
<td style="user-select: auto;">FALSE</td>
<td style="user-select: auto;">도서 ID</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">CATEGORY</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
<td style="user-select: auto;">카테고리 (경제, 인문, 소설, 생활, 기술)</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">AUTHOR_ID</td>
<td style="user-select: auto;">INTEGER</td>
<td style="user-select: auto;">FALSE</td>
<td style="user-select: auto;">저자 ID</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PRICE</td>
<td style="user-select: auto;">INTEGER</td>
<td style="user-select: auto;">FALSE</td>
<td style="user-select: auto;">판매가 (원)</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PUBLISHED_DATE</td>
<td style="user-select: auto;">DATE</td>
<td style="user-select: auto;">FALSE</td>
<td style="user-select: auto;">출판일</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;"><code style="user-select: auto;">BOOK_SALES</code> 테이블은 각 도서의 날짜 별 판매량 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">Column name</th>
<th style="user-select: auto;">Type</th>
<th style="user-select: auto;">Nullable</th>
<th style="user-select: auto;">Description</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">BOOK_ID</td>
<td style="user-select: auto;">INTEGER</td>
<td style="user-select: auto;">FALSE</td>
<td style="user-select: auto;">도서 ID</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">SALES_DATE</td>
<td style="user-select: auto;">DATE</td>
<td style="user-select: auto;">FALSE</td>
<td style="user-select: auto;">판매일</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">SALES</td>
<td style="user-select: auto;">INTEGER</td>
<td style="user-select: auto;">FALSE</td>
<td style="user-select: auto;">판매량</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">문제</h5>

<p style="user-select: auto;"><code style="user-select: auto;">2022년 1월</code>의 카테고리 별 도서 판매량을 합산하고, 카테고리(<code style="user-select: auto;">CATEGORY</code>), 총 판매량(<code style="user-select: auto;">TOTAL_SALES</code>) 리스트를 출력하는 SQL문을 작성해주세요. <br style="user-select: auto;">
결과는 카테고리명을 기준으로 오름차순 정렬해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;">예를 들어 <code style="user-select: auto;">BOOK</code> 테이블과 <code style="user-select: auto;">BOOK_SALES</code> 테이블이 다음과 같다면</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">BOOK_ID</th>
<th style="user-select: auto;">CATEGORY</th>
<th style="user-select: auto;">AUTHOR_ID</th>
<th style="user-select: auto;">PRICE</th>
<th style="user-select: auto;">PUBLISHED_DATE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">인문</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">10000</td>
<td style="user-select: auto;">2020-01-01</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">경제</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">9000</td>
<td style="user-select: auto;">2021-02-05</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">경제</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">9000</td>
<td style="user-select: auto;">2021-03-11</td>
</tr>
</tbody>
      </table><table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">BOOK_ID</th>
<th style="user-select: auto;">SALES_DATE</th>
<th style="user-select: auto;">SALES</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2022-01-01</td>
<td style="user-select: auto;">2</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2022-01-02</td>
<td style="user-select: auto;">3</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2022-01-05</td>
<td style="user-select: auto;">1</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2022-01-20</td>
<td style="user-select: auto;">5</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2022-01-21</td>
<td style="user-select: auto;">6</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">2022-01-22</td>
<td style="user-select: auto;">2</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2022-02-11</td>
<td style="user-select: auto;">3</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">2022년 1월의 도서 별 총 판매량은 도서 ID 가 1 인 도서가 총 3권, 도서 ID 가 2 인 도서가 총 14권 이고, 도서 ID 가 3 인 도서가 총 2권 입니다.</p>

<p style="user-select: auto;">카테고리 별로 판매량을 집계한 결과는 다음과 같습니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">CATEGORY</th>
<th style="user-select: auto;">TOTAL_SALES</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">인문</td>
<td style="user-select: auto;">3</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">경제</td>
<td style="user-select: auto;">16</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">카테고리명을 오름차순으로 정렬하면 다음과 같이 나와야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">CATEGORY</th>
<th style="user-select: auto;">TOTAL_SALES</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">경제</td>
<td style="user-select: auto;">16</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">인문</td>
<td style="user-select: auto;">3</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges