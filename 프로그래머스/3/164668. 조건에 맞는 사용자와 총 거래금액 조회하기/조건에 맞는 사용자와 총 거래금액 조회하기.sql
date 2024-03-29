-- 코드를 입력하세요


SELECT B.USER_ID,B.NICKNAME,A.TOTAL_SALES
FROM (SELECT WRITER_ID,SUM(PRICE) AS TOTAL_SALES
FROM USED_GOODS_BOARD
WHERE STATUS='DONE'
GROUP BY WRITER_ID) A JOIN USED_GOODS_USER B ON A.WRITER_ID=B.USER_ID
WHERE A.TOTAL_SALES>=700000
ORDER BY A.TOTAL_SALES ASC