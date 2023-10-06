# [level 3] 조건별로 분류하여 주문상태 출력하기 - 131113 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131113) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > String， Date

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">다음은 식품공장의 주문정보를 담은 <code style="user-select: auto;">FOOD_ORDER</code> 테이블입니다. <code style="user-select: auto;">FOOD_ORDER</code> 테이블은 다음과 같으며 <code style="user-select: auto;">ORDER_ID</code>, <code style="user-select: auto;">PRODUCT_ID</code>, <code style="user-select: auto;">AMOUNT</code>, <code style="user-select: auto;">PRODUCE_DATE</code>, <code style="user-select: auto;">IN_DATE</code>,<code style="user-select: auto;">OUT_DATE</code>,<code style="user-select: auto;">FACTORY_ID</code>, <code style="user-select: auto;">WAREHOUSE_ID</code>는 각각 주문 ID, 제품 ID, 주문양, 생산일자, 입고일자, 출고일자, 공장 ID, 창고 ID를 의미합니다.</p>
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

<p style="user-select: auto;"><code style="user-select: auto;">FOOD_ORDER</code> 테이블에서 5월 1일을 기준으로 주문 ID, 제품 ID, 출고일자, 출고여부를 조회하는 SQL문을 작성해주세요. 출고여부는 5월 1일까지 출고완료로 이 후 날짜는 출고 대기로 미정이면 출고미정으로 출력해주시고, 결과는 주문 ID를 기준으로 오름차순 정렬해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">예시</h5>

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
<td style="user-select: auto;">OD00000051</td>
<td style="user-select: auto;">P0002</td>
<td style="user-select: auto;">4000</td>
<td style="user-select: auto;">2022-04-01</td>
<td style="user-select: auto;">2022-04-21</td>
<td style="user-select: auto;">2022-04-21</td>
<td style="user-select: auto;">FT19970003</td>
<td style="user-select: auto;">WH0005</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000052</td>
<td style="user-select: auto;">P0003</td>
<td style="user-select: auto;">2500</td>
<td style="user-select: auto;">2022-04-10</td>
<td style="user-select: auto;">2022-04-27</td>
<td style="user-select: auto;">2022-04-27</td>
<td style="user-select: auto;">FT19970003</td>
<td style="user-select: auto;">WH0006</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000053</td>
<td style="user-select: auto;">P0005</td>
<td style="user-select: auto;">6200</td>
<td style="user-select: auto;">2022-04-15</td>
<td style="user-select: auto;">2022-04-30</td>
<td style="user-select: auto;">2022-05-01</td>
<td style="user-select: auto;">FT19940003</td>
<td style="user-select: auto;">WH0003</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000054</td>
<td style="user-select: auto;">P0006</td>
<td style="user-select: auto;">1000</td>
<td style="user-select: auto;">2022-04-21</td>
<td style="user-select: auto;">2022-04-30</td>
<td style="user-select: auto;">NULL</td>
<td style="user-select: auto;">FT19940003</td>
<td style="user-select: auto;">WH0009</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000055</td>
<td style="user-select: auto;">P0008</td>
<td style="user-select: auto;">1500</td>
<td style="user-select: auto;">2022-04-25</td>
<td style="user-select: auto;">2022-05-11</td>
<td style="user-select: auto;">2022-05-11</td>
<td style="user-select: auto;">FT19980003</td>
<td style="user-select: auto;">WH0009</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">SQL을 실행하면 다음과 같이 출력되어야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">ORDER_ID</th>
<th style="user-select: auto;">PRODUCT_ID</th>
<th style="user-select: auto;">OUT_DATE</th>
<th style="user-select: auto;">출고여부</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">OD00000051</td>
<td style="user-select: auto;">P0002</td>
<td style="user-select: auto;">2022-04-21</td>
<td style="user-select: auto;">출고완료</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000052</td>
<td style="user-select: auto;">P0003</td>
<td style="user-select: auto;">2022-04-27</td>
<td style="user-select: auto;">출고완료</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000053</td>
<td style="user-select: auto;">P0005</td>
<td style="user-select: auto;">2022-05-01</td>
<td style="user-select: auto;">출고완료</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000054</td>
<td style="user-select: auto;">P0006</td>
<td style="user-select: auto;"></td>
<td style="user-select: auto;">출고미정</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">OD00000055</td>
<td style="user-select: auto;">P0008</td>
<td style="user-select: auto;">2022-05-11</td>
<td style="user-select: auto;">출고대기</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges