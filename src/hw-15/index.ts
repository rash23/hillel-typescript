import { TicketTypeEnum } from './types/cashier';
import { Cashier } from './classes/cashier/Cashier';
import { Visitor } from './classes/clients/Visitor';
import { Ticket } from './classes/cashier/Ticket';
import { Clients } from './classes/clients/Clients';
import { AdvertisingDepartment } from './classes/departments/AdvertisingDepartment';
import { Revenue } from './classes/revenue/Revenue';
import { Employee } from './classes/employees/Employee';
import { Animal } from './classes/animals/Animal';
import { AccountingDepartment } from './classes/departments/AccountingDepartment';
import { Administration } from './classes/departments/Administration';
import { Budget } from './classes/budget/Budget';

// ---------------------------------------- cashier ----------------------------------------

const clients = new Clients();
const cashier = new Cashier();

const revenue = new Revenue();
cashier.attach(revenue);

// Sell tickets
const Ivan = new Visitor('Ivan', 'ivan@example.com');
const adultTicket = new Ticket(TicketTypeEnum.Adult, 100);
cashier.sellTicket(Ivan, adultTicket);

const Maria = new Visitor('Maria', 'maria@example.com');
const childTicket = new Ticket(TicketTypeEnum.Child, 50);
cashier.sellTicket(Maria, childTicket);

const Petro = new Visitor('Petro', 'petro@example.com');
const familyTicket = new Ticket(TicketTypeEnum.Family, 200);
cashier.sellTicket(Petro, familyTicket);

cashier.notifyVisitorsBeforeClosing();
cashier.notifyVisitorsBeforeLeaving();

// ---------------------------------------- advertisingDepartment ----------------------------------------

clients.addClient(Ivan, adultTicket);
clients.addClient(Maria, childTicket);
clients.addClient(Petro, familyTicket);

const advertisingDepartment = new AdvertisingDepartment();
clients.attach(advertisingDepartment);

// ---------------------------------------- accountingDepartment ----------------------------------------

const accountingDepartment = new AccountingDepartment();
const zookeeper = new Employee('Tad', 5000, 'Zookeeper', ['clean', 'feed']);

const lion = new Animal('Lion', 'Leo', 20, 'healthy', 200);

accountingDepartment.addEmployee(zookeeper);
accountingDepartment.addAnimal(lion);

accountingDepartment.generateFinancialReport();

// ---------------------------------------- Administration ----------------------------------------

const administration = new Administration();
administration.addEmployee(zookeeper);
administration.createNotification('Special Discount on Zoo Tickets this Weekend!');
administration.createNotification('Animal Show at 2 PM in the Amphitheater!');
const notificationsList = administration.getNotifications();
console.log('List of Notifications:', notificationsList);
const updatedEmployeesList = administration.employees;
console.log('Updated List of Employees:', updatedEmployeesList);

// ---------------------------------------- Budget ----------------------------------------

const zooBudget = new Budget();
zooBudget.addToRevenue(5000);
zooBudget.addExpenses(2000);

zooBudget.financialReport();
