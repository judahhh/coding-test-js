# [level 3] 자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기 - 157340 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/157340) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > GROUP BY

### 채점결과

Empty

### 제출 일자

2023년 10월 2일 1:45:40

### 문제 설명

<p style="user-select: auto;">다음은 어느 자동차 대여 회사의 자동차 대여 기록 정보를 담은 <code style="user-select: auto;">CAR_RENTAL_COMPANY_RENTAL_HISTORY</code> 테이블입니다. <code style="user-select: auto;">CAR_RENTAL_COMPANY_RENTAL_HISTORY</code> 테이블은 아래와 같은 구조로 되어있으며, <code style="user-select: auto;">HISTORY_ID</code>, <code style="user-select: auto;">CAR_ID</code>, <code style="user-select: auto;">START_DATE</code>, <code style="user-select: auto;">END_DATE</code> 는 각각 자동차 대여 기록 ID, 자동차 ID, 대여 시작일, 대여 종료일을 나타냅니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">Column name</th>
<th style="user-select: auto;">Type</th>
<th style="user-select: auto;">Nullable</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">HISTORY_ID</td>
<td style="user-select: auto;">INTEGER</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">CAR_ID</td>
<td style="user-select: auto;">INTEGER</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">START_DATE</td>
<td style="user-select: auto;">DATE</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">END_DATE</td>
<td style="user-select: auto;">DATE</td>
<td style="user-select: auto;">FALSE</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">문제</h5>

<p style="user-select: auto;"><code style="user-select: auto;">CAR_RENTAL_COMPANY_RENTAL_HISTORY</code> 테이블에서 2022년 10월 16일에 대여 중인 자동차인 경우 '대여중' 이라고 표시하고, 대여 중이지 않은 자동차인 경우 '대여 가능'을 표시하는 컬럼(컬럼명: <code style="user-select: auto;">AVAILABILITY</code>)을 추가하여 자동차 ID와 <code style="user-select: auto;">AVAILABILITY</code> 리스트를 출력하는 SQL문을 작성해주세요. 이때 반납 날짜가 2022년 10월 16일인 경우에도 '대여중'으로 표시해주시고 결과는 자동차 ID를 기준으로 내림차순 정렬해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;">예를 들어 <code style="user-select: auto;">CAR_RENTAL_COMPANY_RENTAL_HISTORY</code> 테이블이 다음과 같다면</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">HISTORY_ID</th>
<th style="user-select: auto;">CAR_ID</th>
<th style="user-select: auto;">START_DATE</th>
<th style="user-select: auto;">END_DATE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">2022-09-27</td>
<td style="user-select: auto;">2022-09-27</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">2022-10-03</td>
<td style="user-select: auto;">2022-10-04</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2022-10-05</td>
<td style="user-select: auto;">2022-10-05</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2022-10-11</td>
<td style="user-select: auto;">2022-10-16</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">2022-10-13</td>
<td style="user-select: auto;">2022-10-15</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">6</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">2022-10-15</td>
<td style="user-select: auto;">2022-10-17</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">2022년 10월 16일에 대여 중인 자동차는 자동차 ID가 1, 2인 자동차이고, 대여 가능한 자동차는 자동차 ID가 3, 4이므로, '대여중' 또는 '대여 가능' 을 표시하는 컬럼을 추가하고, 자동차 ID를 기준으로 내림차순 정렬하면 다음과 같이 나와야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">CAR_ID</th>
<th style="user-select: auto;">AVAILABILITY</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">대여 가능</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">대여 가능</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">대여중</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">대여중</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges