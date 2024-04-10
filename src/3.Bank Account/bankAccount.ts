class BankAccount {
  private static nextId: number = 1;
  private _id: number;
  private _balance: number;
  private static _interestRate: number = 0.02;

  constructor(balance: number) {
    this._id = BankAccount.nextId++;
    this._balance = balance;
  }

  getId(): number {
    return this._id;
  }

  getInterest(years: number): number {
    return this._balance * BankAccount._interestRate * years;
  }

  static setInterestRate(rate: number): void {
    BankAccount._interestRate = rate;
  }

  deposit(amount: number): void {
    this._balance += amount;
  }
}
const accounts: BankAccount[] = [];

function testClient(input: string): void {
  const [action, ...params] = input.split(" ");

  switch (action) {
    case "Create":
      const newAccount = new BankAccount(0);
      accounts.push(newAccount);
      console.log(`Account ID${newAccount.getId()} created`);
      break;
    case "Deposit":
      const accountId = parseInt(params[0]);
      const depositAmount = parseFloat(params[1]);
      const depositAccountIndex = accounts.findIndex(
        (acc) => acc.getId() === accountId
      );
      // If acc doesn't exist return message
      if (depositAccountIndex === -1) {
        return console.log("Account does not exist");
      }
      accounts[depositAccountIndex].deposit(depositAmount);
      console.log(`Deposited ${depositAmount} to ID${accountId}`);
      break;
    case "SetInterest":
      const newInterestRate = parseFloat(params[0]);
      BankAccount.setInterestRate(newInterestRate);
      console.log(`Sets the global interest rate to ${newInterestRate}`);
      break;
    case "GetInterest":
      const currentAccountId = parseInt(params[0]);
      const years = parseInt(params[1]);
      const currentAccountIdIndex = accounts.findIndex(
        (acc) => acc.getId() === currentAccountId
      );
      if (currentAccountIdIndex === -1) {
        return console.log("Account does not exist");
      }
      const interest = accounts[currentAccountIdIndex]
        .getInterest(years)
        .toFixed(2);
      console.log(interest);
      break;
    case "End":
      console.log("Ending the program...");
      break;
    default:
      console.log(`Invalid input ${action}`);
  }
}

// const input1 = "Create";
// const input2 = "Deposit 1 20";
// const input3 = "GetInterest 1 10";
// const input4 = "End";

// testClient(input1);
// testClient(input2);
// testClient(input3);
// testClient(input4);

// console.log("------------------------------------");

const input5 = "Create";
const input6 = "Create";
const input7 = "Deposit 1 20";
const input8 = "Deposit 3 20";
const input9 = "Deposit 2 10";
const input10 = "SetInterest 1.5";
const input11 = "GetInterest 1 1";
const input12 = "GetInterest 2 1";
const input13 = "GetInterest 3 1";
const input14 = "End";

testClient(input5)
testClient(input6)
testClient(input7)
testClient(input8)
testClient(input9)
testClient(input10)
testClient(input11)
testClient(input12)
testClient(input13)
testClient(input14)
