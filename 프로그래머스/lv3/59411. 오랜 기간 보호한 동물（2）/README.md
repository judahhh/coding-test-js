# [level 3] 오랜 기간 보호한 동물(2) - 59411 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59411) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > String， Date

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;"><code style="user-select: auto;">ANIMAL_INS</code> 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. <code style="user-select: auto;">ANIMAL_INS</code> 테이블 구조는 다음과 같으며, <code style="user-select: auto;">ANIMAL_ID</code>, <code style="user-select: auto;">ANIMAL_TYPE</code>, <code style="user-select: auto;">DATETIME</code>, <code style="user-select: auto;">INTAKE_CONDITION</code>, <code style="user-select: auto;">NAME</code>, <code style="user-select: auto;">SEX_UPON_INTAKE</code>는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">TYPE</th>
<th style="user-select: auto;">NULLABLE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">ANIMAL_ID</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">ANIMAL_TYPE</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">DATETIME</td>
<td style="user-select: auto;">DATETIME</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">INTAKE_CONDITION</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">NAME</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">SEX_UPON_INTAKE</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;"><code style="user-select: auto;">ANIMAL_OUTS</code> 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. <code style="user-select: auto;">ANIMAL_OUTS</code> 테이블 구조는 다음과 같으며, <code style="user-select: auto;">ANIMAL_ID</code>, <code style="user-select: auto;">ANIMAL_TYPE</code>, <code style="user-select: auto;">DATETIME</code>, <code style="user-select: auto;">NAME</code>, <code style="user-select: auto;">SEX_UPON_OUTCOME</code>는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. <code style="user-select: auto;">ANIMAL_OUTS</code> 테이블의 <code style="user-select: auto;">ANIMAL_ID</code>는 <code style="user-select: auto;">ANIMAL_INS</code>의 <code style="user-select: auto;">ANIMAL_ID</code>의 외래 키입니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">TYPE</th>
<th style="user-select: auto;">NULLABLE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">ANIMAL_ID</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">ANIMAL_TYPE</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">DATETIME</td>
<td style="user-select: auto;">DATETIME</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">NAME</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">SEX_UPON_OUTCOME</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">입양을 간 동물 중, 보호 기간이 가장 길었던 동물 두 마리의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 기간이 긴 순으로 조회해야 합니다.</p>

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;">예를 들어, <code style="user-select: auto;">ANIMAL_INS</code> 테이블과 <code style="user-select: auto;">ANIMAL_OUTS</code> 테이블이 다음과 같다면</p>

<p style="user-select: auto;"><code style="user-select: auto;">ANIMAL_INS</code></p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">ANIMAL_ID</th>
<th style="user-select: auto;">ANIMAL_TYPE</th>
<th style="user-select: auto;">DATETIME</th>
<th style="user-select: auto;">INTAKE_CONDITION</th>
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">SEX_UPON_INTAKE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">A354597</td>
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">2014-05-02 12:16:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Ariel</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A362707</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2016-01-27 12:27:00</td>
<td style="user-select: auto;">Sick</td>
<td style="user-select: auto;">Girly Girl</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A370507</td>
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">2014-10-27 14:43:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Emily</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A414513</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2016-06-07 09:17:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Rocky</td>
<td style="user-select: auto;">Neutered Male</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;"><code style="user-select: auto;">ANIMAL_OUTS</code></p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">ANIMAL_ID</th>
<th style="user-select: auto;">ANIMAL_TYPE</th>
<th style="user-select: auto;">DATETIME</th>
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">SEX_UPON_OUTCOME</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">A354597</td>
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">2014-06-03 12:30:00</td>
<td style="user-select: auto;">Ariel</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A362707</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2017-01-10 10:44:00</td>
<td style="user-select: auto;">Girly Girl</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A370507</td>
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">2015-08-15 09:24:00</td>
<td style="user-select: auto;">Emily</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">SQL문을 실행하면 다음과 같이 나와야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">ANIMAL_ID</th>
<th style="user-select: auto;">NAME</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">A362707</td>
<td style="user-select: auto;">Girly Girl</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A370507</td>
<td style="user-select: auto;">Emily</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">※ 입양을 간 동물이 2마리 이상인 경우만 입력으로 주어집니다.</p>

<hr style="user-select: auto;">

<p style="user-select: auto;">본 문제는 <a href="https://www.kaggle.com/aaronschlegel/austin-animal-center-shelter-intakes-and-outcomes" target="_blank" rel="noopener" style="user-select: auto;">Kaggle의 "Austin Animal Center Shelter Intakes and Outcomes"</a>에서 제공하는 데이터를 사용하였으며 <a href="https://opendatacommons.org/licenses/odbl/1.0/" target="_blank" rel="noopener" style="user-select: auto;">ODbL</a>의 적용을 받습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges