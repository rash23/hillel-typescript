import { Administration } from './Administration';
import { Employee } from '../employees/Employee';

describe('Administration', () => {
  let administration: Administration;

  beforeEach(() => {
    administration = new Administration();
  });

  test('addEmployee should add an employee to the list', () => {
    const zooKeeper = new Employee('John Doe', 50000, 'Zoo Keeper', ['Taking care of animals', 'Cleaning enclosures']);
    administration.addEmployee(zooKeeper);

    expect(administration.employees).toContain(zooKeeper);
  });

  test('removeEmployee should remove an employee from the list', () => {
    const vet = new Employee('Alice Wonderland', 60000, 'Veterinarian', [
      'Medical care for animals',
      'Health checkups',
    ]);
    administration.addEmployee(vet);
    administration.removeEmployee(vet);

    expect(administration.employees).not.toContain(vet);
  });

  test('createNotification should add a notification to the list and notify observers', () => {
    const spy = jest.spyOn(administration, 'notify');
    const notification = 'Meeting at 2 PM';

    administration.createNotification(notification);

    expect(administration.getNotifications()).toContain(notification);
    expect(spy).toHaveBeenCalled();
  });

  test('getNotifications should return the list of notifications', () => {
    const notifications = ['Meeting at 2 PM', 'Team Building Event'];
    notifications.forEach(notification => administration.createNotification(notification));

    expect(administration.getNotifications()).toEqual(notifications);
  });
});
