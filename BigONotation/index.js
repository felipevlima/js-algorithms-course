function addUpTo(n) {
  let total = 0;
  for (let i = 1; i<= n; i++) {
    total += i
  }
  return total
}


function addUpTo2(n) {
  return n * (n + 1) / 2
}

let t1 = performance.now()
console.log(addUpTo(10000000000))
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

const t3 = performance.now()
console.log(addUpTo2(1000000000))
const t4= performance.now()

console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)