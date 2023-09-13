"use strict";
var BudgetTypeEnum;
(function (BudgetTypeEnum) {
    BudgetTypeEnum["Debit"] = "debit";
    BudgetTypeEnum["Credit"] = "credit";
})(BudgetTypeEnum || (BudgetTypeEnum = {}));
var EmployeeStatus;
(function (EmployeeStatus) {
    EmployeeStatus["Active"] = "Active";
    EmployeeStatus["Inactive"] = "Inactive";
    EmployeeStatus["UnpaidLeave"] = "UnpaidLeave";
})(EmployeeStatus || (EmployeeStatus = {}));
class Employee {
    id;
    firstName;
    lastName;
    paymentInfo;
    salary;
    status;
    department;
    balance = 0;
    constructor(id, firstName, lastName, paymentInfo, salary, status, department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.paymentInfo = paymentInfo;
        this.salary = salary;
        this.status = status;
        this.department = department;
    }
    updateBalance(amount, paymentInfo) {
        if (paymentInfo) {
            this.balance += amount;
        }
    }
}
class PreHireEmployee {
    id;
    firstName;
    lastName;
    salary;
    bankAccount;
    _balance = 0;
    constructor(id, firstName, lastName, salary, bankAccount) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.bankAccount = bankAccount;
    }
    updateBalance(amount, bankAccount) {
        if (bankAccount) {
            this._balance += amount;
        }
    }
}
class Department {
    _id;
    _name;
    _domain;
    _employees = [];
    _pre_hire_employees = [];
    _budget = {
        debit: 0,
        credit: 0,
    };
    get employees() {
        return this._employees;
    }
    constructor(id, name, domain) {
        this._id = id;
        this._name = name;
        this._domain = domain;
    }
    addBudget(amount, type) {
        if (type === BudgetTypeEnum.Debit) {
            this._budget.debit += amount;
        }
        if (type === BudgetTypeEnum.Credit) {
            this._budget.credit += amount;
        }
    }
    removeBudget(amount, type) {
        if (type === BudgetTypeEnum.Debit) {
            this._budget.debit += amount;
        }
        if (type === BudgetTypeEnum.Credit) {
            this._budget.credit += amount;
        }
    }
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this._employees = [...this._employees, employee];
        }
        if (employee instanceof PreHireEmployee) {
            this._pre_hire_employees = [...this._pre_hire_employees, employee];
        }
        this.addBudget(employee.salary, BudgetTypeEnum.Debit);
    }
    movePreHireEmployeeToEmployees(preHireEmployee, paymentInfo, status, department) {
        const { id, firstName, lastName, salary } = preHireEmployee;
        this._employees = [
            ...this._employees,
            new Employee(id, firstName, lastName, paymentInfo, salary, status, department),
        ];
    }
}
class AccountingDepartment extends Department {
    _balance;
    constructor(id, balance) {
        super(id, 'Accounting', 'Finance');
        this._balance = balance;
    }
    paySalaries(searchingEmployee) {
        if (searchingEmployee instanceof Employee) {
            this._employees.forEach(employee => {
                if (employee.status === EmployeeStatus.Active) {
                    this.removeBudget(employee.salary, BudgetTypeEnum.Debit);
                    if (employee.id === searchingEmployee.id) {
                        employee.updateBalance(employee.salary, employee.paymentInfo);
                    }
                }
            });
        }
        if (searchingEmployee instanceof PreHireEmployee) {
            this._pre_hire_employees.forEach(employee => {
                this.removeBudget(employee.salary, BudgetTypeEnum.Debit);
                if (employee.id === searchingEmployee.id) {
                    employee.updateBalance(employee.salary, employee.bankAccount);
                }
            });
        }
    }
}
class Company {
    _name;
    _departments = [];
    _employees = [];
    _pre_hire_employees = [];
    get departments() {
        return this._departments;
    }
    get employees() {
        return (this._employees = this._departments.flatMap(department => department._employees));
    }
    get preHireEmployees() {
        return (this._pre_hire_employees = this._departments.flatMap(department => department._pre_hire_employees));
    }
    constructor(name) {
        this._name = name;
    }
    addDepartment(department) {
        this._departments = [...this._departments, department];
    }
    removeDepartment(id) {
        this._departments = this._departments.filter(department => department._id !== id);
    }
}
