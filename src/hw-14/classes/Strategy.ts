import { ICurrencyConversionStrategy, CurrencyTypesEnum } from '../types';

export class CurrentRateConversionStrategy implements ICurrencyConversionStrategy {
  constructor(private exchangeRates: Record<CurrencyTypesEnum, number>) {}

  public convert(amount: number, currency: CurrencyTypesEnum): number {
    const rate = this.exchangeRates[currency];

    if (!rate) throw new Error(`Exchange rate not available for currency ${currency}`);

    return amount * rate;
  }
}

export class FixedRateConversionStrategy implements ICurrencyConversionStrategy {
  constructor(private fixedRate: number) {}

  public convert(amount: number, currency: CurrencyTypesEnum): number {
    return amount * this.fixedRate;
  }
}
