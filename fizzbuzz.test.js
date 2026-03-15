import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { fizzbuzz } from './index.js';

describe('fizzbuzz', () => {
  it('returns "1" for 1', () => {
    assert.equal(fizzbuzz(1), '1');
  });
});
