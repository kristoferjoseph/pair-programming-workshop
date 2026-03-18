import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { fizzbuzz } from './index.js';

// FizzBuzz — facilitator demo exercise
//
// Problem: Given a number, return:
//   "Fizz"     for multiples of 3
//   "Buzz"     for multiples of 5
//   "FizzBuzz" for multiples of both 3 and 5
//   the number as a string otherwise
//
// Success criteria agreed by the pair:
//   fizzbuzz(1)  → "1"
//   fizzbuzz(3)  → "Fizz"
//   fizzbuzz(5)  → "Buzz"
//   fizzbuzz(15) → "FizzBuzz"
//
// Write one failing test at a time. Run it. Watch it fail (red).
// Write the minimum code to make it pass (green).
// Refactor only when all tests are green.
describe('fizzbuzz', () => {
  it('returns "1" for 1', () => {
    assert.equal(fizzbuzz(1), '1');
  });
});
