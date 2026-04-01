import { describe, expect, it } from 'vitest';

import { detectCurrencyPrefix, formatCartAmount, parsePriceLabelToNumber } from './cartUtils';

describe('cartUtils', () => {
  it('parses Indonesian-style thousand separators', () => {
    expect(parsePriceLabelToNumber('Rp 2.500.000')).toBe(2500000);
  });

  it('parses decimal notation with comma-thousands and dot-decimals', () => {
    expect(parsePriceLabelToNumber('Rs. 250,000.00')).toBe(250000);
  });

  it('detects leading currency prefixes', () => {
    expect(detectCurrencyPrefix('Rs. 270,000.00')).toBe('Rs.');
  });

  it('formats subtotal labels with currency prefix', () => {
    expect(formatCartAmount(520000, 'Rs.')).toBe('Rs. 520,000.00');
  });
});
