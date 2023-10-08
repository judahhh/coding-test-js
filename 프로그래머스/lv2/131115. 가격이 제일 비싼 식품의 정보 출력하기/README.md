# [level 2] 가격이 제일 비싼 식품의 정보 출력하기 - 131115 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131115) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > SUM， MAX， MIN

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">다음은 식품의 정보를 담은 <code style="user-select: auto;">FOOD_PRODUCT</code> 테이블입니다. <code style="user-select: auto;">FOOD_PRODUCT</code> 테이블은 다음과 같으며 <code style="user-select: auto;">PRODUCT_ID</code>, <code style="user-select: auto;">PRODUCT_NAME</code>, <code style="user-select: auto;">PRODUCT_CD</code>, <code style="user-select: auto;">CATEGORY</code>, <code style="user-select: auto;">PRICE</code>는 식품 ID, 식품 이름, 식품 코드, 식품분류, 식품 가격을 의미합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">Column name</th>
<th style="user-select: auto;">Type</th>
<th style="user-select: auto;">Nullable</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">PRODUCT_ID</td>
<td style="user-select: auto;">VARCHAR(10)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PRODUCT_NAME</td>
<td style="user-select: auto;">VARCHAR(50)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PRODUCT_CD</td>
<td style="user-select: auto;">VARCHAR(10)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">CATEGORY</td>
<td style="user-select: auto;">VARCHAR(10)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PRICE</td>
<td style="user-select: auto;">NUMBER</td>
<td style="user-select: auto;">TRUE</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">문제</h5>

<p style="user-select: auto;"><code style="user-select: auto;">FOOD_PRODUCT</code> 테이블에서 가격이 제일 비싼 식품의 식품 ID, 식품 이름, 식품 코드, 식품분류, 식품 가격을 조회하는 SQL문을 작성해주세요. </p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;"><code style="user-select: auto;">FOOD_PRODUCT</code> 테이블이 다음과 같을 때</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">PRODUCT_ID</th>
<th style="user-select: auto;">PRODUCT_NAME</th>
<th style="user-select: auto;">PRODUCT_CD</th>
<th style="user-select: auto;">CATEGORY</th>
<th style="user-select: auto;">PRICE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">P0018</td>
<td style="user-select: auto;">맛있는고추기름</td>
<td style="user-select: auto;">CD_OL00008</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">6100</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0019</td>
<td style="user-select: auto;">맛있는카놀라유</td>
<td style="user-select: auto;">CD_OL00009</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">5100</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0020</td>
<td style="user-select: auto;">맛있는산초유</td>
<td style="user-select: auto;">CD_OL00010</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">6500</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0021</td>
<td style="user-select: auto;">맛있는케첩</td>
<td style="user-select: auto;">CD_OL00001</td>
<td style="user-select: auto;">소스</td>
<td style="user-select: auto;">4500</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0022</td>
<td style="user-select: auto;">맛있는마요네즈</td>
<td style="user-select: auto;">CD_OL00002</td>
<td style="user-select: auto;">소스</td>
<td style="user-select: auto;">4700</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">SQL을 실행하면 다음과 같이 출력되어야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">PRODUCT_ID</th>
<th style="user-select: auto;">PRODUCT_NAME</th>
<th style="user-select: auto;">PRODUCT_CD</th>
<th style="user-select: auto;">CATEGORY</th>
<th style="user-select: auto;">PRICE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">P0020</td>
<td style="user-select: auto;">맛있는산초유</td>
<td style="user-select: auto;">CD_OL00010</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">6500</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges