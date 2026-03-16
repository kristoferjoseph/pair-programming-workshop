export function fizzbuzz(n) {
  const result = (n % 3 === 0? 'Fizz': '') +
    (n % 5 === 0? 'Buzz': '')
  return result || String(n)
}
