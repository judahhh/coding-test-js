# [level 4] 우유와 요거트가 담긴 장바구니 - 62284 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/62284) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > Summer／Winter Coding（2019）

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;"><code style="user-select: auto;">CART_PRODUCTS</code> 테이블은 장바구니에 담긴 상품 정보를 담은 테이블입니다. <code style="user-select: auto;">CART_PRODUCTS</code> 테이블의 구조는 다음과 같으며, <code style="user-select: auto;">ID</code>, <code style="user-select: auto;">CART_ID</code>, <code style="user-select: auto;">NAME</code>, <code style="user-select: auto;">PRICE</code>는 각각 테이블의 아이디, 장바구니의 아이디, 상품 종류, 가격을 나타냅니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">TYPE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">ID</td>
<td style="user-select: auto;">INT</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">CART_ID</td>
<td style="user-select: auto;">INT</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">NAME</td>
<td style="user-select: auto;">VARCHAR</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PRICE</td>
<td style="user-select: auto;">INT</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">데이터 분석 팀에서는 우유(Milk)와 요거트(Yogurt)를 동시에 구입한 장바구니가 있는지 알아보려 합니다. 우유와 요거트를 동시에 구입한 장바구니의 아이디를 조회하는 SQL 문을 작성해주세요. 이때 결과는 장바구니의 아이디 순으로 나와야 합니다.</p>

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;">예를 들어 <code style="user-select: auto;">CART_PRODUCTS</code> 테이블이 다음과 같다면</p>

<p style="user-select: auto;"><code style="user-select: auto;">CART_PRODUCTS</code> 테이블</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">ID</th>
<th style="user-select: auto;">CART_ID</th>
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">PRICE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">1630</td>
<td style="user-select: auto;">83</td>
<td style="user-select: auto;">Cereal</td>
<td style="user-select: auto;">3980</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">1631</td>
<td style="user-select: auto;">83</td>
<td style="user-select: auto;">Multipurpose Supply</td>
<td style="user-select: auto;">3900</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">5491</td>
<td style="user-select: auto;">286</td>
<td style="user-select: auto;">Yogurt</td>
<td style="user-select: auto;">2980</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">5504</td>
<td style="user-select: auto;">286</td>
<td style="user-select: auto;">Milk</td>
<td style="user-select: auto;">1880</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">8435</td>
<td style="user-select: auto;">448</td>
<td style="user-select: auto;">Milk</td>
<td style="user-select: auto;">1880</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">8437</td>
<td style="user-select: auto;">448</td>
<td style="user-select: auto;">Yogurt</td>
<td style="user-select: auto;">2980</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">8438</td>
<td style="user-select: auto;">448</td>
<td style="user-select: auto;">Tea</td>
<td style="user-select: auto;">11000</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">20236</td>
<td style="user-select: auto;">1034</td>
<td style="user-select: auto;">Yogurt</td>
<td style="user-select: auto;">2980</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">20237</td>
<td style="user-select: auto;">1034</td>
<td style="user-select: auto;">Butter</td>
<td style="user-select: auto;">4890</td>
</tr>
</tbody>
      </table>
<ul style="user-select: auto;">
<li style="user-select: auto;">83번 장바구니에는 Milk와 Yogurt가 모두 없습니다.</li>
<li style="user-select: auto;">286번 장바구니에는 Milk와 Yogurt가 모두 있습니다.</li>
<li style="user-select: auto;">448번 장바구니에는 Milk와 Yogurt가 모두 있습니다.</li>
<li style="user-select: auto;">1034번 장바구니에는 Milk는 없고 Yogurt만 있습니다.</li>
</ul>

<p style="user-select: auto;">따라서 SQL 문을 실행하면 다음과 같이 나와야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">CART_ID</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">286</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">448</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges