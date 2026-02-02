import { describe, it, expect } from 'vitest'

describe('Sample test', () => {
  it('works', () => {
    expect(true).toBe(true);
  })
  it('in Nodejs', () => {
    expect(typeof process).toBe('object');
  })
})