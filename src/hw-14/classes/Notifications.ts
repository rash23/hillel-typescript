import { BankAccount } from './BankAccount';
import { IObserver } from '../types';

export class SMSNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(`SMS notification: Your account balance has chenged. Current balance: ${account.balance}`);
  }
}

export class EmailNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(`Email notification: Your account balance has chenged. Current balance: ${account.balance}`);
  }
}

export class PushNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(`Push notification: Your account balance has chenged. Current balance: ${account.balance}`);
  }
}
