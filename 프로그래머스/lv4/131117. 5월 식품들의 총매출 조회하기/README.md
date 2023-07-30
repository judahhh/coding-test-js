# [level 4] 5월 식품들의 총매출 조회하기 - 131117 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131117) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > JOIN

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">다음은 식품의 정보를 담은 <code style="user-select: auto;">FOOD_PRODUCT</code> 테이블과 식품의 주문 정보를 담은 <code style="user-select: auto;">FOOD_ORDER</code> 테이블입니다. <code style="user-select: auto;">FOOD_PRODUCT</code> 테이블은 다음과 같으며 <code style="user-select: auto;">PRODUCT_ID</code>, <code style="user-select: auto;">PRODUCT_NAME</code>, <code style="user-select: auto;">PRODUCT_CD</code>, <code style="user-select: auto;">CATEGORY</code>, <code style="user-select: auto;">PRICE</code>는 식품 ID, 식품 이름, 식품코드, 식품분류, 식품 가격을 의미합니다.</p>
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
<p style="user-select: auto;"><code style="user-select: auto;">FOOD_ORDER</code> 테이블은 다음과 같으며 <code style="user-select: auto;">ORDER_ID</code>, <code style="user-select: auto;">PRODUCT_ID</code>, <code style="user-select: auto;">AMOUNT</code>,  <code style="user-select: auto;">PRODUCE_DATE</code>, <code style="user-select: auto;">IN_DATE</code>, <code style="user-select: auto;">OUT_DATE</code>, <code style="user-select: auto;">FACTORY_ID</code>, <code style="user-select: auto;">WAREHOUSE_ID</code>는 각각 주문 ID, 제품 ID, 주문량, 생산일자, 입고일자, 출고일자, 공장 ID, 창고 ID를 의미합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">Column name</th>
<th style="user-select: auto;">Type</th>
<th style="user-select: auto;">Nullable</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">ORDER_ID</td>
<td style="user-select: auto;">VARCHAR(10)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PRODUCT_ID</td>
<td style="user-select: auto;">VARCHAR(5)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">AMOUNT</td>
<td style="user-select: auto;">NUMBER</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PRODUCE_DATE</td>
<td style="user-select: auto;">DATE</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">IN_DATE</td>
<td style="user-select: auto;">DATE</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OUT_DATE</td>
<td style="user-select: auto;">DATE</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">FACTORY_ID</td>
<td style="user-select: auto;">VARCHAR(10)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">WAREHOUSE_ID</td>
<td style="user-select: auto;">VARCHAR(10)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">문제</h5>

<p style="user-select: auto;"><code style="user-select: auto;">FOOD_PRODUCT</code>와 <code style="user-select: auto;">FOOD_ORDER</code> 테이블에서 생산일자가 2022년 5월인 식품들의 식품 ID, 식품 이름, 총매출을 조회하는 SQL문을 작성해주세요. 이때 결과는 총매출을 기준으로 내림차순 정렬해주시고 총매출이 같다면 식품 ID를 기준으로 오름차순 정렬해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;"><code style="user-select: auto;">FOOD_PRODUCT</code> 테이블이 다음과 같고</p>
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
<td style="user-select: auto;">P0011</td>
<td style="user-select: auto;">맛있는콩기름</td>
<td style="user-select: auto;">CD_OL00001</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">4880</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0012</td>
<td style="user-select: auto;">맛있는올리브유</td>
<td style="user-select: auto;">CD_OL00002</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">7200</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0013</td>
<td style="user-select: auto;">맛있는포도씨유</td>
<td style="user-select: auto;">CD_OL00003</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">5950</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0014</td>
<td style="user-select: auto;">맛있는마조유</td>
<td style="user-select: auto;">CD_OL00004</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">8950</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0015</td>
<td style="user-select: auto;">맛있는화조유</td>
<td style="user-select: auto;">CD_OL00005</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">8800</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0016</td>
<td style="user-select: auto;">맛있는참기름</td>
<td style="user-select: auto;">CD_OL00006</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">7100</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0017</td>
<td style="user-select: auto;">맛있는들기름</td>
<td style="user-select: auto;">CD_OL00007</td>
<td style="user-select: auto;">식용유</td>
<td style="user-select: auto;">7900</td>
</tr>
<tr style="user-select: auto;">
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
</tbody>
      </table>
<p style="user-select: auto;"><code style="user-select: auto;">FOOD_ORDER</code> 테이블이 다음과 같을 때</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">ORDER_ID</th>
<th style="user-select: auto;">PRODUCT_ID</th>
<th style="user-select: auto;">AMOUNT</th>
<th style="user-select: auto;">PRODUCE_DATE</th>
<th style="user-select: auto;">IN_DATE</th>
<th style="user-select: auto;">OUT_DATE</th>
<th style="user-select: auto;">FACTORY_ID</th>
<th style="user-select: auto;">WAREHOUSE_ID</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">OD00000056</td>
<td style="user-select: auto;">P0012</td>
<td style="user-select: auto;">1000</td>
<td style="user-select: auto;">2022-04-04</td>
<td style="user-select: auto;">2022-04-21</td>
<td style="user-select: auto;">2022-04-25</td>
<td style="user-select: auto;">FT19980002</td>
<td style="user-select: auto;">WH0032</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000057</td>
<td style="user-select: auto;">P0014</td>
<td style="user-select: auto;">2500</td>
<td style="user-select: auto;">2022-04-14</td>
<td style="user-select: auto;">2022-04-27</td>
<td style="user-select: auto;">2022-05-01</td>
<td style="user-select: auto;">FT19980002</td>
<td style="user-select: auto;">WH0033</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000058</td>
<td style="user-select: auto;">P0017</td>
<td style="user-select: auto;">1200</td>
<td style="user-select: auto;">2022-05-19</td>
<td style="user-select: auto;">2022-05-28</td>
<td style="user-select: auto;">2022-05-28</td>
<td style="user-select: auto;">FT20070002</td>
<td style="user-select: auto;">WH0033</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000059</td>
<td style="user-select: auto;">P0017</td>
<td style="user-select: auto;">1000</td>
<td style="user-select: auto;">2022-05-24</td>
<td style="user-select: auto;">2022-05-30</td>
<td style="user-select: auto;">2022-05-30</td>
<td style="user-select: auto;">FT20070002</td>
<td style="user-select: auto;">WH0038</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000060</td>
<td style="user-select: auto;">P0019</td>
<td style="user-select: auto;">2000</td>
<td style="user-select: auto;">2022-05-29</td>
<td style="user-select: auto;">2022-06-08</td>
<td style="user-select: auto;">2022-06-08</td>
<td style="user-select: auto;">FT20070002</td>
<td style="user-select: auto;">WH0035</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">SQL을 실행하면 다음과 같이 출력되어야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">PRODUCT_ID</th>
<th style="user-select: auto;">PRODUCT_NAME</th>
<th style="user-select: auto;">TOTAL_SALES</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">P0017</td>
<td style="user-select: auto;">맛있는들기름</td>
<td style="user-select: auto;">17380000</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">P0019</td>
<td style="user-select: auto;">맛있는카놀라유</td>
<td style="user-select: auto;">10200000</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges