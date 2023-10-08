# [unrated] 조건에 맞는 사용자 정보 조회하기 - 164670 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/164670) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > String， Date

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">다음은 중고 거래 게시판 정보를 담은 <code style="user-select: auto;">USED_GOODS_BOARD</code> 테이블과 중고 거래 게시판 첨부파일 정보를 담은 <code style="user-select: auto;">USED_GOODS_USER</code> 테이블입니다. <code style="user-select: auto;">USED_GOODS_BOARD</code> 테이블은 다음과 같으며 <code style="user-select: auto;">BOARD_ID</code>, <code style="user-select: auto;">WRITER_ID</code>, <code style="user-select: auto;">TITLE</code>, <code style="user-select: auto;">CONTENTS</code>, <code style="user-select: auto;">PRICE</code>, <code style="user-select: auto;">CREATED_DATE</code>, <code style="user-select: auto;">STATUS</code>, <code style="user-select: auto;">VIEWS</code>는 게시글 ID, 작성자 ID, 게시글 제목, 게시글 내용, 가격, 작성일, 거래상태, 조회수를 의미합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">Column name</th>
<th style="user-select: auto;">Type</th>
<th style="user-select: auto;">Nullable</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">BOARD_ID</td>
<td style="user-select: auto;">VARCHAR(5)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">WRITER_ID</td>
<td style="user-select: auto;">VARCHAR(50)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">TITLE</td>
<td style="user-select: auto;">VARCHAR(100)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">CONTENTS</td>
<td style="user-select: auto;">VARCHAR(1000)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">PRICE</td>
<td style="user-select: auto;">NUMBER</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">CREATED_DATE</td>
<td style="user-select: auto;">DATE</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">STATUS</td>
<td style="user-select: auto;">VARCHAR(10)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">VIEWS</td>
<td style="user-select: auto;">NUMBER</td>
<td style="user-select: auto;">FALSE</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;"><code style="user-select: auto;">USED_GOODS_USER</code> 테이블은 다음과 같으며 <code style="user-select: auto;">USER_ID</code>, <code style="user-select: auto;">NICKNAME</code>, <code style="user-select: auto;">CITY</code>, <code style="user-select: auto;">STREET_ADDRESS1</code>, <code style="user-select: auto;">STREET_ADDRESS2</code>, <code style="user-select: auto;">TLNO</code>는 각각 회원 ID, 닉네임, 시, 도로명 주소, 상세 주소, 전화번호를 의미합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">Column name</th>
<th style="user-select: auto;">Type</th>
<th style="user-select: auto;">Nullable</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">USER_ID</td>
<td style="user-select: auto;">VARCHAR(50)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">NICKANME</td>
<td style="user-select: auto;">VARCHAR(100)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">CITY</td>
<td style="user-select: auto;">VARCHAR(100)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">STREET_ADDRESS1</td>
<td style="user-select: auto;">VARCHAR(100)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">STREET_ADDRESS2</td>
<td style="user-select: auto;">VARCHAR(100)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">TLNO</td>
<td style="user-select: auto;">VARCHAR(20)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">문제</h5>

<p style="user-select: auto;"><code style="user-select: auto;">USED_GOODS_BOARD</code>와 <code style="user-select: auto;">USED_GOODS_USER</code> 테이블에서 중고 거래 게시물을 3건 이상 등록한 사용자의 사용자 ID, 닉네임, 전체주소, 전화번호를 조회하는 SQL문을 작성해주세요. 이때, 전체 주소는 시, 도로명 주소, 상세 주소가 함께 출력되도록 해주시고, 전화번호의 경우 xxx-xxxx-xxxx 같은 형태로 하이픈 문자열(<code style="user-select: auto;">-</code>)을 삽입하여 출력해주세요. 결과는 회원 ID를 기준으로 내림차순 정렬해주세요. </p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;"><code style="user-select: auto;">USED_GOODS_BOARD</code> 테이블이 다음과 같고</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">BOARD_ID</th>
<th style="user-select: auto;">WRITER_ID</th>
<th style="user-select: auto;">TITLE</th>
<th style="user-select: auto;">CONTENTS</th>
<th style="user-select: auto;">PRICE</th>
<th style="user-select: auto;">CREATED_DATE</th>
<th style="user-select: auto;">STATUS</th>
<th style="user-select: auto;">VIEWS</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">B0001</td>
<td style="user-select: auto;">dhfkzmf09</td>
<td style="user-select: auto;">칼라거펠트 코트</td>
<td style="user-select: auto;">양모 70%이상 코트입니다.</td>
<td style="user-select: auto;">120000</td>
<td style="user-select: auto;">2022-10-14</td>
<td style="user-select: auto;">DONE</td>
<td style="user-select: auto;">104</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">B0002</td>
<td style="user-select: auto;">lee871201</td>
<td style="user-select: auto;">국내산 볶음참깨</td>
<td style="user-select: auto;">직접 농사지은 참깨입니다.</td>
<td style="user-select: auto;">3000</td>
<td style="user-select: auto;">2022-10-02</td>
<td style="user-select: auto;">DONE</td>
<td style="user-select: auto;">121</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">B0003</td>
<td style="user-select: auto;">dhfkzmf09</td>
<td style="user-select: auto;">나이키 숏패팅</td>
<td style="user-select: auto;">사이즈는 M입니다.</td>
<td style="user-select: auto;">40000</td>
<td style="user-select: auto;">2022-10-17</td>
<td style="user-select: auto;">DONE</td>
<td style="user-select: auto;">98</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">B0004</td>
<td style="user-select: auto;">kwag98</td>
<td style="user-select: auto;">반려견 배변패드 팝니다</td>
<td style="user-select: auto;">정말 저렴히 판매합니다. 전부 미개봉 새상품입니다.</td>
<td style="user-select: auto;">12000</td>
<td style="user-select: auto;">2022-10-01</td>
<td style="user-select: auto;">DONE</td>
<td style="user-select: auto;">250</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">B0005</td>
<td style="user-select: auto;">dhfkzmf09</td>
<td style="user-select: auto;">PS4</td>
<td style="user-select: auto;">PS5 구매로인해 팝니다.</td>
<td style="user-select: auto;">250000</td>
<td style="user-select: auto;">2022-11-03</td>
<td style="user-select: auto;">DONE</td>
<td style="user-select: auto;">111</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;"><code style="user-select: auto;">USED_GOODS_USER</code> 테이블이 다음과 같을 때</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">USER_ID</th>
<th style="user-select: auto;">NICKNAME</th>
<th style="user-select: auto;">CITY</th>
<th style="user-select: auto;">STREET_ADDRESS1</th>
<th style="user-select: auto;">STREET_ADDRESS2</th>
<th style="user-select: auto;">TLNO</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">dhfkzmf09</td>
<td style="user-select: auto;">찐찐</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 수내로 13</td>
<td style="user-select: auto;">A동 1107호</td>
<td style="user-select: auto;">01053422914</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">dlPcks90</td>
<td style="user-select: auto;">썹썹</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 수내로 74</td>
<td style="user-select: auto;">401호</td>
<td style="user-select: auto;">01034573944</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">cjfwls91</td>
<td style="user-select: auto;">점심만금식</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 내정로 185</td>
<td style="user-select: auto;">501호</td>
<td style="user-select: auto;">01036344964</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">dlfghks94</td>
<td style="user-select: auto;">희망</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 내정로 101</td>
<td style="user-select: auto;">203동 102호</td>
<td style="user-select: auto;">01032634154</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">rkdhs95</td>
<td style="user-select: auto;">용기</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 수내로 23</td>
<td style="user-select: auto;">501호</td>
<td style="user-select: auto;">01074564564</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">SQL을 실행하면 다음과 같이 출력되어야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">USER_ID</th>
<th style="user-select: auto;">NICKNAME</th>
<th style="user-select: auto;">전체주소</th>
<th style="user-select: auto;">전화번호</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">dhfkzmf09</td>
<td style="user-select: auto;">찐찐</td>
<td style="user-select: auto;">성남시 분당구 수내로 13 A동 1107호</td>
<td style="user-select: auto;">010-5342-2914</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges