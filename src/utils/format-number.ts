import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number: string | number, isDollar: boolean = false) {
  const format = isDollar ? '0,0.00' : '0,0';
  return numeral(number).format(format);
}

export function fCurrencyWithSuffix(number: number) {
  if (number >= 1000000000) {
    return `${numeral(number / 1000000000).format('0.0')}B`;
  }
  if (number >= 1000000) {
    return `${numeral(number / 1000000).format('0.0')}M`;
  }

  return numeral(number).format('0,0');
}

export function fCurrencySuffixIDR(value: string | number): string {
  const numberValue = typeof value === 'string' ? parseFloat(value) : value;

  if (numberValue >= 1000000000000) {
    return `Rp${numeral(numberValue / 1000000000000).format('0.0')}T`;
  }
  if (numberValue >= 1000000000) {
    return `Rp${numeral(numberValue / 1000000000).format('0.0')}M`;
  }

  return `Rp${numeral(numberValue).format('0,0.00')}`;
}

export function fPercent(number: number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number: string | number) {
  return numeral(number).format();
}

export function fShortenNumber(number: string | number) {
  let num = Number(number);
  const suffixes = ['', 'rb', 'jt', 'M', 'T'];

  let i = 0;
  while (num >= 1000) {
    num /= 1000;
    // eslint-disable-next-line no-plusplus
    i++;
  }

  return `${num.toFixed(2).replace(/\.0+$/, '')}${suffixes[i]}`;
}

export function fData(number: string | number) {
  return numeral(number).format('0.0 b');
}
