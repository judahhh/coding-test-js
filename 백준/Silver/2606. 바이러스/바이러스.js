const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);
let g = [];

for (let i = 1; i <= n; i++) g[i] = [];
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  // console.log(x, y);
  g[x].push(y);
  g[y].push(x);
}

let cnt = 0;
let visit = Array(n + 1).fill(false);
function dfs(x) {
  visit[x] = true;
  cnt++;
  for (const v of g[x]) {
    if (!visit[v]) dfs(v);
  }
}

dfs(1);
console.log(cnt - 1);
