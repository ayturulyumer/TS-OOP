"use strict";
class Employee {
    constructor(name, salary, position, department, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getAvgSalary() {
        if (this.employees.length !== 0) {
            const totalSalary = this.employees.reduce((acc, employee) => acc + employee.salary, 0);
            return totalSalary / this.employees.length;
        }
        return 0;
    }
}
function calculateHighestAvgSalary(employeesArr) {
    const departments = {};
    // removing the first element of the array which is the number of employees
    const numberOfEmployeesAsString = employeesArr.shift();
    //  parsing it to num
    const n = parseInt(numberOfEmployeesAsString);
    for (let i = 0; i < n; i++) {
        const [name, salaryStr, position, department, email, ageStr] = employeesArr[i].split(" ");
        const salary = parseFloat(salaryStr);
        const age = ageStr ? parseInt(ageStr) : undefined;
        const employee = new Employee(name, salary, position, department, email ? email : "n/a", age ? age : -1);
        if (!departments[department]) {
            departments[department] = new Department(department);
        }
        departments[department].addEmployee(employee);
    }
    let avgMaxSalary = -Infinity;
    let departmentWithMaxSalary;
    for (const departmentName in departments) {
        const department = departments[departmentName];
        const avgSalary = department.getAvgSalary();
        if (avgSalary > avgMaxSalary) {
            avgMaxSalary = avgSalary;
            departmentWithMaxSalary = department;
        }
    }
    if (departmentWithMaxSalary) {
        console.log(`Highest Average Salary: ${departmentWithMaxSalary.name}`);
        departmentWithMaxSalary.employees
            .sort((a, b) => b.salary - a.salary)
            .forEach((employee) => {
            console.log(`${employee.name} ${employee.salary.toFixed(2)}  ${employee.email} ${employee.age}`);
        });
    }
}
const empData = [
    "4",
    "Peter 120.00 Dev Development peter@abv.bg 28",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development sam@sam.com",
    "George 0.20 Freeloader Nowhere 18",
];
const empData2 = [
    "6",
    "Silver 496.37 Temp Coding silver@yahoo.com",
    "Sam 610.13 Manager Sales",
    "John 609.99 Manager Sales john@abv.bg 44",
    "Venci 0.02 Director BeerDrinking beer@beer.br 23",
    "Andre 700.00 Director Coding",
    "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey",
];
calculateHighestAvgSalary(empData);
console.log("-----------------------------------------------");
calculateHighestAvgSalary(empData2);
//# sourceMappingURL=companyRoster.js.map