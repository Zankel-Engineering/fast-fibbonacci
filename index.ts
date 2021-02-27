// @ts-nocheck
const len = 10000;
const fibos: Array<bigint> = Array.apply(null, new Array(len)).map(()=> 0n);
const fibo: (n: number, fibos: bigint[]) => bigint = (n, fibos) => {
  if ( n === 1 || n === 0 ) {
    return BigInt(n);
  }
  if ( fibos[n - 1] === 0n ) {
    fibos[n - 1] = fibo(n - 1, fibos);
  }
  if ( fibos[n - 2] === 0n ) {
    fibos[n - 2] = fibo(n - 1, fibos);
  }
  return BigInt(fibos[n - 1] + fibos[n - 2]);
}
for ( let i = 1; i < len; i++ ) {
  // @ts-ignore
  if ( fibos[i] === 0n ) {
    fibos[i] = fibo(i, fibos);
  }
}
// You can use the numbers from array
console.log(fibos[9999]);
