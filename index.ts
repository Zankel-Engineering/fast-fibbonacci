const fibos: Array<number> = Array.apply(null, new Array(100)).map(()=> 0);;
const fibo: (n: number, fibos: number[]) => number = (n, fibos) => {
  if ( n === 1 || n === 0 ) {
    return n;
  }
  if ( fibos[n - 1] === 0 ) {
    fibos[n - 1] = fibo(n - 1, fibos);
  }
  if ( fibos[n - 2] === 0 ) {
    fibos[n - 2] = fibo(n - 1, fibos);
  }
  return fibos[n - 1] + fibos[n - 2];
}
for ( let i = 1; i < 100; i++ ) {
  if ( fibos[i] === 0 ) {
    fibos[i] = fibo(i, fibos);
  }
}
console.log(fibos[99]);
