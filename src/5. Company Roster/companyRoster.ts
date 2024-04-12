class Employee {
  name: string;
  salary: number;
  position: string;
  department: string;
  email?: string;
  age?: number;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string,
    email?: string,
    age?: number
  ) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
    this.email = email;
    this.age = age;
  }
}

class Department {
  name: string;
  employees: Employee[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getAvgSalary(): number {
    if (this.employees.length !== 0) {
      const totalSalary = this.employees.reduce(
        (acc, employee) => acc + employee.salary,
        0
      );
      return totalSalary / this.employees.length;
    }
    return 0;
  }
}

function calculateHighestAvgSalary(employeesArr: string[]) {
  const departments: { [departmentName: string]: Department } = {};

  // removing the first element of the array which is the number of employees
  const numberOfEmployeesAsString = employeesArr.shift()!;
  //  parsing it to num
  const n = parseInt(numberOfEmployeesAsString);

  for (let i = 0; i < n; i++) {
    const [name, salaryStr, position, department, email, ageStr] =
      employeesArr[i].split(" ");
    const salary = parseFloat(salaryStr);
    const age = ageStr ? parseInt(ageStr) : undefined;
    const employee = new Employee(
      name,
      salary,
      position,
      department,
      email ? email : "n/a",
      age ? age : -1
    );

    if (!departments[department]) {
      departments[department] = new Department(department);
    }
    departments[department].addEmployee(employee);
  }

  let avgMaxSalary = -Infinity;
  let departmentWithMaxSalary: Department | undefined;

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
        console.log(
          `${employee.name} ${employee.salary.toFixed(2)}  ${employee.email} ${
            employee.age
          }`
        );
      });
  }
}

const empData: string[] = [
  "4",

  "Peter 120.00 Dev Development peter@abv.bg 28",

  "Tina 333.33 Manager Marketing 33",

  "Sam 840.20 ProjectLeader Development sam@sam.com",

  "George 0.20 Freeloader Nowhere 18",
];

const empData2: string[] = [
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
