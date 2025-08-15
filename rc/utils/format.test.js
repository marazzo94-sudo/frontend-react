import { describe, it, expect } from 'vitest';
import { formatNumber } from './format';

describe('formatNumber', () => {
  it('formats numbers with commas', () => {
    expect(formatNumber(12345)).toBe('12,345');
  });
});
