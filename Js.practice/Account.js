class account {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log(" Deposite Amount should be positive");
    }
  }
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    } else {
      console.log("Withdrawal amount should be positive");
    }
  }
  getBalance() {
    return this.#balance;
  }
}
const myAccount = new account(100);
myAccount.deposit(100);
console.log(myAccount.getBalance());
myAccount.withdraw(50);
console.log(myAccount.getBalance());
myAccount.withdraw(500);
console.log(myAccount.getBalance());
