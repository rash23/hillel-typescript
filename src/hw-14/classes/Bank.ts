import { BankAccount } from './BankAccount';
import { IBankClient, CurrencyTypesEnum, ICurrencyConversionStrategy } from '../types';

export class Bank {
  private static instance: Bank | null = null;
  private accounts: BankAccount[] = [];

  private constructor() {}

  public static getInstance(): Bank {
    if (!Bank.instance) {
      Bank.instance = new Bank();
    }
    return Bank.instance;
  }

  public createAccount(
    client: IBankClient,
    currency: CurrencyTypesEnum,
    conversionStrategy: ICurrencyConversionStrategy
  ): BankAccount {
    try {
      const account = new BankAccount(client, currency, conversionStrategy);
      this.accounts.push(account);
      return account;
    } catch (error) {
      // Handle the error, log it, or re-throw it as needed.
      console.error('Error creating account:', error);
      throw error; // Optionally re-throw the error for higher-level error handling.
    }
  }

  public closeAccount(account: BankAccount): void {
    try {
      const index = this.accounts.indexOf(account);
      if (index !== -1) {
        this.accounts.splice(index, 1);
      } else {
        throw new Error('Account not found.');
      }
    } catch (error) {
      // Handle the error, log it, or re-throw it as needed.
      console.error('Error closing account:', error);
      throw error; // Optionally re-throw the error for higher-level error handling.
    }
  }
}
