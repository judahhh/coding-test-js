let index = 0
const result = {}, aeiou = [..."AEIOU"]

function solution(word) {
  dfs('', 0)
  return result[word]
}

const dfs = (word, length) => {
  if (length > 5) return
  result[word] = index++
  aeiou.forEach((v) => {
    dfs(word + v, length + 1);
  });
};