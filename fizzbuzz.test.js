import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { fizzbuzz } from './index.js';

describe('fizzbuzz', () => {
  it('returns "1" for 1', () => {
    assert.equal(fizzbuzz(1), '1');
  });
});

describe('fizzbuzz', () => {
  it('returns "Fizz" for 3', () => {
    assert.equal(fizzbuzz(3), 'Fizz');
  });
});

describe('fizzbuzz', () => {
  it('returns "Fizz" for 6', () => {
    assert.equal(fizzbuzz(6), 'Fizz');
  });
});

describe('fizzbuzz', () => {
  it('returns "Buzz" for 5', () => {
    assert.equal(fizzbuzz(5), 'Buzz');
  });
});

describe('fizzbuzz', () => {
  it('returns "Buzz" for 10', () => {
    assert.equal(fizzbuzz(10), 'Buzz');
  });
});

describe('fizzbuzz', () => {
  it('returns "FizzBuzz" for 15', () => {
    assert.equal(fizzbuzz(15), 'FizzBuzz');
  });
});

describe('fizzbuzz', () => {
  it('returns "2" for 2', () => {
    assert.equal(fizzbuzz(2), '2');
  });
});

describe('fizzbuzz', () => {
  it('returns "Fizz" for 9', () => {
    assert.equal(fizzbuzz(9), 'Fizz');
  });
});
