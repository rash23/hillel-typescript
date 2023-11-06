import { CurrencyTypesEnum } from './types';
import { CurrentRateConversionStrategy, FixedRateConversionStrategy } from './classes/Strategy';
import { BankAccount } from './classes/BankAccount';
import { Bank } from './classes/Bank';
import { SMSNotification, EmailNotification, PushNotification } from './classes/Notifications';

const exchangeRates = {
  [CurrencyTypesEnum.USD]: 1.1,
  [CurrencyTypesEnum.EUR]: 0.9,
  [CurrencyTypesEnum.UAH]: 38,
};

const currentRateStrategy = new CurrentRateConversionStrategy(exchangeRates);
const fixedRateStrategy = new FixedRateConversionStrategy(0.5);

const account = new BankAccount({ firstName: 'John', lastName: 'Doe' }, CurrencyTypesEnum.USD, currentRateStrategy);

const smsNotificaton = new SMSNotification();
const emailNotificaton = new EmailNotification();
const pushNotificaton = new PushNotification();

account.attach(smsNotificaton);
account.attach(emailNotificaton);
account.attach(pushNotificaton);

account.deposit(1000);

account.detach(emailNotificaton);
account.detach(pushNotificaton);

account.conversionStrategy = fixedRateStrategy;
account.withdraw(100, CurrencyTypesEnum.UAH);

const bank = Bank.getInstance();

// Create new accounts
const client1 = { firstName: 'Alice', lastName: 'Smith' };

const account1 = bank.createAccount(client1, CurrencyTypesEnum.USD, currentRateStrategy);
const account2 = bank.createAccount(client1, CurrencyTypesEnum.EUR, currentRateStrategy);

// Close one account
bank.closeAccount(account2);
