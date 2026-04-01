export function parsePriceLabelToNumber(priceLabel: string): number {
  const numericPart = priceLabel.replace(/[^\d.,]/g, '').replace(/^[.,]+/, '').trim();

  if (!numericPart) {
    return 0;
  }

  const hasComma = numericPart.includes(',');
  const hasDot = numericPart.includes('.');
  let normalized = numericPart;

  if (hasComma && hasDot) {
    const lastComma = numericPart.lastIndexOf(',');
    const lastDot = numericPart.lastIndexOf('.');

    if (lastDot > lastComma) {
      normalized = numericPart.replace(/,/g, '');
    } else {
      normalized = numericPart.replace(/\./g, '').replace(',', '.');
    }
  } else if (hasDot) {
    const dotCount = (numericPart.match(/\./g) ?? []).length;
    normalized = dotCount > 1 ? numericPart.replace(/\./g, '') : numericPart;
  } else if (hasComma) {
    const commaCount = (numericPart.match(/,/g) ?? []).length;
    normalized = commaCount > 1 ? numericPart.replace(/,/g, '') : numericPart.replace(',', '.');
  }

  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function detectCurrencyPrefix(priceLabel: string): string {
  const match = priceLabel.match(/^[^\d]+/);
  return match ? match[0].trim() : '';
}

export function formatCartAmount(amount: number, currencyPrefix: string): string {
  const normalizedPrefix = currencyPrefix.trim();
  const lower = normalizedPrefix.toLowerCase();

  if (lower.startsWith('rp')) {
    return `Rp ${Math.round(amount).toLocaleString('id-ID')}`;
  }

  if (lower.startsWith('rs')) {
    return `Rs. ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  if (normalizedPrefix) {
    return `${normalizedPrefix} ${amount.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
  }

  return amount.toLocaleString('en-US', { maximumFractionDigits: 2 });
}
