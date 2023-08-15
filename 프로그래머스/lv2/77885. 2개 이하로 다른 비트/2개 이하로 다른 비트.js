function solution(numbers) {
  return numbers.map((v) => {
    let str = '0' + v.toString(2);
    //짝수일 때
    if (str[str.length - 1] === '0') {
      str = str.slice(0, str.length - 1) + '1';
    }
    //홀수일 때
    else {
      const idx = str.lastIndexOf('01');
      str = str.slice(0, idx) + '10' + str.slice(idx + 2, str.length);
    }

    return parseInt(str, 2);
  });
}