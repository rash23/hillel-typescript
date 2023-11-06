import { Observable } from './Observable';
import { CurrencyTypesEnum, IBankClient, ICurrencyConversionStrategy } from '../types';

export class BankAccount extends Observable {
  private readonly currency: CurrencyTypesEnum;
  private readonly _number: number;
  private _balance = 0;
  private _holder: IBankClient;
  private _conversionStrategy: ICurrencyConversionStrategy;

  public get number(): number {
    return this._number;
  }

  public get balance(): number {
    return this._balance;
  }

  public set conversionStrategy(strategy: ICurrencyConversionStrategy) {
    this._conversionStrategy = strategy;
  }

  constructor(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy) {
    super();
    this.currency = currency;
    this._holder = client;
    this._number = 1234343;
    this._conversionStrategy = conversionStrategy;
  }

  public holder(): IBankClient {
    return this._holder;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive.');
    }

    this._balance += amount;
    this.notify();
  }

  public withdraw(amount: number, currency: CurrencyTypesEnum): void {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive.');
    }

    try {
      const convertedAmount = this._conversionStrategy.convert(amount, currency);

      if (this._balance < convertedAmount) {
        throw new Error('Insufficient funds on the account.');
      }

      this._balance -= convertedAmount;
      this.notify();
    } catch (error) {
      console.error('Error while withdrawing funds:', error.message);
    }
  }
}
