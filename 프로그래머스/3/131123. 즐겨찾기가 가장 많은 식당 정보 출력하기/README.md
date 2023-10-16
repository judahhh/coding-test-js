# [level 3] 즐겨찾기가 가장 많은 식당 정보 출력하기 - 131123 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131123) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > GROUP BY

### 채점결과

Empty

### 제출 일자

2023년 10월 2일 1:9:24

### 문제 설명

<p style="user-select: auto;">다음은 식당의 정보를 담은 <code style="user-select: auto;">REST_INFO</code> 테이블입니다. <code style="user-select: auto;">REST_INFO</code> 테이블은 다음과 같으며 <code style="user-select: auto;">REST_ID</code>, <code style="user-select: auto;">REST_NAME</code>, <code style="user-select: auto;">FOOD_TYPE</code>, <code style="user-select: auto;">VIEWS</code>, <code style="user-select: auto;">FAVORITES</code>, <code style="user-select: auto;">PARKING_LOT</code>, <code style="user-select: auto;">ADDRESS</code>, <code style="user-select: auto;">TEL</code>은 식당 ID, 식당 이름, 음식 종류, 조회수, 즐겨찾기수, 주차장 유무, 주소, 전화번호를 의미합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">Column name</th>
<th style="user-select: auto;">Type</th>
<th style="user-select: auto;">Nullable</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">REST_ID</td>
<td style="user-select: auto;">VARCHAR(5)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">REST_NAME</td>
<td style="user-select: auto;">VARCHAR(50)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">FOOD_TYPE</td>
<td style="user-select: auto;">VARCHAR(20)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">VIEWS</td>
<td style="user-select: auto;">NUMBER</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">FAVORITES</td>
<td style="user-select: auto;">NUMBER</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PARKING_LOT</td>
<td style="user-select: auto;">VARCHAR(1)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">ADDRESS</td>
<td style="user-select: auto;">VARCHAR(100)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">TEL</td>
<td style="user-select: auto;">VARCHAR(100)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">문제</h5>

<p style="user-select: auto;"><code style="user-select: auto;">REST_INFO</code> 테이블에서 음식종류별로 즐겨찾기수가 가장 많은 식당의 음식 종류, ID, 식당 이름, 즐겨찾기수를 조회하는 SQL문을 작성해주세요. 이때 결과는 음식 종류를 기준으로 내림차순 정렬해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;"><code style="user-select: auto;">REST_INFO</code> 테이블이 다음과 같을 때</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">REST_ID</th>
<th style="user-select: auto;">REST_NAME</th>
<th style="user-select: auto;">FOOD_TYPE</th>
<th style="user-select: auto;">VIEWS</th>
<th style="user-select: auto;">FAVORITES</th>
<th style="user-select: auto;">PARKING_LOT</th>
<th style="user-select: auto;">ADDRESS</th>
<th style="user-select: auto;">TEL</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">00001</td>
<td style="user-select: auto;">은돼지식당</td>
<td style="user-select: auto;">한식</td>
<td style="user-select: auto;">1150345</td>
<td style="user-select: auto;">734</td>
<td style="user-select: auto;">N</td>
<td style="user-select: auto;">서울특별시 중구 다산로 149</td>
<td style="user-select: auto;">010-4484-8751</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">00002</td>
<td style="user-select: auto;">하이가쯔네</td>
<td style="user-select: auto;">일식</td>
<td style="user-select: auto;">120034</td>
<td style="user-select: auto;">112</td>
<td style="user-select: auto;">N</td>
<td style="user-select: auto;">서울시 중구 신당동 375-21</td>
<td style="user-select: auto;">NULL</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">00003</td>
<td style="user-select: auto;">따띠따띠뜨</td>
<td style="user-select: auto;">양식</td>
<td style="user-select: auto;">1234023</td>
<td style="user-select: auto;">102</td>
<td style="user-select: auto;">N</td>
<td style="user-select: auto;">서울시 강남구 신사동 627-3 1F</td>
<td style="user-select: auto;">02-6397-1023</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">00004</td>
<td style="user-select: auto;">스시사카우스</td>
<td style="user-select: auto;">일식</td>
<td style="user-select: auto;">1522074</td>
<td style="user-select: auto;">230</td>
<td style="user-select: auto;">N</td>
<td style="user-select: auto;">서울시 서울시 강남구 신사동 627-27</td>
<td style="user-select: auto;">010-9394-2554</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">00005</td>
<td style="user-select: auto;">코슌스</td>
<td style="user-select: auto;">일식</td>
<td style="user-select: auto;">15301</td>
<td style="user-select: auto;">123</td>
<td style="user-select: auto;">N</td>
<td style="user-select: auto;">서울특별시 강남구 언주로153길</td>
<td style="user-select: auto;">010-1315-8729</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">SQL을 실행하면 다음과 같이 출력되어야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">FOOD_TYPE</th>
<th style="user-select: auto;">REST_ID</th>
<th style="user-select: auto;">REST_NAME</th>
<th style="user-select: auto;">FAVORITES</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">한식</td>
<td style="user-select: auto;">00001</td>
<td style="user-select: auto;">은돼지식당</td>
<td style="user-select: auto;">734</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">일식</td>
<td style="user-select: auto;">00004</td>
<td style="user-select: auto;">스시사카우스</td>
<td style="user-select: auto;">230</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">양식</td>
<td style="user-select: auto;">00003</td>
<td style="user-select: auto;">따띠따띠뜨</td>
<td style="user-select: auto;">102</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges