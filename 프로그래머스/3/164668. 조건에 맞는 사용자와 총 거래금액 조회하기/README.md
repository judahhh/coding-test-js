# [level 3] 조건에 맞는 사용자와 총 거래금액 조회하기 - 164668 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/164668) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > GROUP BY

### 채점결과

Empty

### 제출 일자

2023년 11월 3일 18:23:14

### 문제 설명

<p style="user-select: auto;">다음은 중고 거래 게시판 정보를 담은 <code style="user-select: auto;">USED_GOODS_BOARD</code> 테이블과 중고 거래 게시판 첨부파일 정보를 담은 <code style="user-select: auto;">USED_GOODS_FILE</code> 테이블입니다. <code style="user-select: auto;">USED_GOODS_BOARD</code> 테이블은 다음과 같으며 <code style="user-select: auto;">BOARD_ID</code>, <code style="user-select: auto;">WRITER_ID</code>, <code style="user-select: auto;">TITLE</code>, <code style="user-select: auto;">CONTENTS</code>, <code style="user-select: auto;">PRICE</code>, <code style="user-select: auto;">CREATED_DATE</code>, <code style="user-select: auto;">STATUS</code>, <code style="user-select: auto;">VIEWS</code>는 게시글 ID, 작성자 ID, 게시글 제목, 게시글 내용, 가격, 작성일, 거래상태, 조회수를 의미합니다.</p>
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
<p style="user-select: auto;"><code style="user-select: auto;">USED_GOODS_USER</code> 테이블은 다음과 같으며 <code style="user-select: auto;">USER_ID</code>, <code style="user-select: auto;">NICKNAME</code>, <code style="user-select: auto;">CITY</code>, <code style="user-select: auto;">STREET_ADDRESS1</code>, <code style="user-select: auto;">STREET_ADDRESS2</code>, <code style="user-select: auto;">TLNO</code>는 각각 회원 ID, 닉네임, 시, 도로명 주소, 상세 주소, 전화번호를 를 의미합니다.</p>
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

<p style="user-select: auto;"><code style="user-select: auto;">USED_GOODS_BOARD</code>와 <code style="user-select: auto;">USED_GOODS_USER</code> 테이블에서 완료된 중고 거래의 총금액이 70만 원 이상인 사람의 회원 ID, 닉네임, 총거래금액을 조회하는 SQL문을 작성해주세요. 결과는 총거래금액을 기준으로 오름차순 정렬해주세요.</p>

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
<td style="user-select: auto;">zkzkdh1</td>
<td style="user-select: auto;">캠핑의자</td>
<td style="user-select: auto;">가벼워요 깨끗한 상태입니다. 2개</td>
<td style="user-select: auto;">25000</td>
<td style="user-select: auto;">2022-11-29</td>
<td style="user-select: auto;">SALE</td>
<td style="user-select: auto;">34</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">B0002</td>
<td style="user-select: auto;">miyeon89</td>
<td style="user-select: auto;">벽걸이 에어컨</td>
<td style="user-select: auto;">엘지 휘센 7평</td>
<td style="user-select: auto;">100000</td>
<td style="user-select: auto;">2022-11-29</td>
<td style="user-select: auto;">SALE</td>
<td style="user-select: auto;">55</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">B0003</td>
<td style="user-select: auto;">dhfkzmf09</td>
<td style="user-select: auto;">에어팟 맥스</td>
<td style="user-select: auto;">에어팟 맥스 스카이 블루 색상 판매합니다.</td>
<td style="user-select: auto;">450000</td>
<td style="user-select: auto;">2022-11-26</td>
<td style="user-select: auto;">DONE</td>
<td style="user-select: auto;">67</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">B0004</td>
<td style="user-select: auto;">sangjune1</td>
<td style="user-select: auto;">파파야나인 포르쉐 푸쉬카</td>
<td style="user-select: auto;">예민하신분은 피해주세요</td>
<td style="user-select: auto;">30000</td>
<td style="user-select: auto;">2022-11-30</td>
<td style="user-select: auto;">DONE</td>
<td style="user-select: auto;">78</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">B0005</td>
<td style="user-select: auto;">zkzkdh1</td>
<td style="user-select: auto;">애플워치7</td>
<td style="user-select: auto;">애플워치7 실버 스텐 45미리 판매합니다.</td>
<td style="user-select: auto;">700000</td>
<td style="user-select: auto;">2022-11-30</td>
<td style="user-select: auto;">DONE</td>
<td style="user-select: auto;">99</td>
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
<td style="user-select: auto;">cjfwls91</td>
<td style="user-select: auto;">점심만금식</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 내정로 185</td>
<td style="user-select: auto;">501호</td>
<td style="user-select: auto;">01036344964</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">zkzkdh1</td>
<td style="user-select: auto;">후후후</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 내정로 35</td>
<td style="user-select: auto;">가동 1202호</td>
<td style="user-select: auto;">01032777543</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">spdlqj12</td>
<td style="user-select: auto;">크크큭</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 수내로 206</td>
<td style="user-select: auto;">2019동 801호</td>
<td style="user-select: auto;">01087234922</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">xlqpfh2</td>
<td style="user-select: auto;">잉여킹</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 수내로 1</td>
<td style="user-select: auto;">001-004</td>
<td style="user-select: auto;">01064534911</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">dhfkzmf09</td>
<td style="user-select: auto;">찐찐</td>
<td style="user-select: auto;">성남시</td>
<td style="user-select: auto;">분당구 수내로 13</td>
<td style="user-select: auto;">A동 1107호</td>
<td style="user-select: auto;">01053422914</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">SQL을 실행하면 다음과 같이 출력되어야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">USER_ID</th>
<th style="user-select: auto;">NICKNAME</th>
<th style="user-select: auto;">TOTAL_SALES</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">zkzkdh1</td>
<td style="user-select: auto;">후후후</td>
<td style="user-select: auto;">700000</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges