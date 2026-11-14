// fastest-primes — odd-only Sieve of Eratosthenes.
// Reads N (1..5,000,000) on stdin, prints pi(N) = count of primes <= N.
// Index i of the Uint8Array represents the odd number 2i+1 (i=0 is 1, never counted).
// Marking starts at i*i, step i in index space (= 2i in value space, odd multiples only).
const fs = require("fs");
const N = +fs.readFileSync(0, "utf-8");
if (N < 2) { process.stdout.write("0\n"); process.exit(0); }
const m = (N + 1) >> 1;
const s = new Uint8Array(m);
const r = Math.sqrt(N) | 0;
for (let i = 3; i <= r; i += 2) {
  if (!s[i >> 1]) {
    for (let j = (i * i) >> 1; j < m; j += i) s[j] = 1;
  }
}
let c = 1; // prime 2
for (let i = 1; i < m; i++) if (!s[i]) c++;
process.stdout.write(String(c) + "\n");
