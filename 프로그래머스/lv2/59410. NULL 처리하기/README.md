# [level 2] NULL 처리하기 - 59410 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59410) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > IS NULL

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
<p style="user-select: auto;">입양 게시판에 동물 정보를 게시하려 합니다. 동물의 생물 종, 이름, 성별 및 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요. 이때 프로그래밍을 모르는 사람들은 NULL이라는 기호를 모르기 때문에, 이름이 없는 동물의 이름은 "No name"으로 표시해 주세요.</p>

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;">예를 들어 <code style="user-select: auto;">ANIMAL_INS</code> 테이블이 다음과 같다면</p>
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
<td style="user-select: auto;">A350276</td>
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">2017-08-13 13:50:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Jewel</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A350375</td>
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">2017-03-06 15:01:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Meo</td>
<td style="user-select: auto;">Neutered Male</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A368930</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2014-06-08 13:20:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">NULL</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">마지막 줄의 개는 이름이 없기 때문에, 이 개의 이름은 "No name"으로 표시합니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다. </p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">ANIMAL_TYPE</th>
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">SEX_UPON_INTAKE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">Jewel</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">Meo</td>
<td style="user-select: auto;">Neutered Male</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">No name</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">※ 컬럼 이름은 일치하지 않아도 됩니다.</p>

<hr style="user-select: auto;">

<p style="user-select: auto;">본 문제는 <a href="https://www.kaggle.com/aaronschlegel/austin-animal-center-shelter-intakes-and-outcomes" target="_blank" rel="noopener" style="user-select: auto;">Kaggle의 "Austin Animal Center Shelter Intakes and Outcomes"</a>에서 제공하는 데이터를 사용하였으며 <a href="https://opendatacommons.org/licenses/odbl/1.0/" target="_blank" rel="noopener" style="user-select: auto;">ODbL</a>의 적용을 받습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges