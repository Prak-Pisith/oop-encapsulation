class PiggyBank {
  private savings: number = 0; // This is hidden and can only be changed from inside

  checkSavings(): string {
    return `You have ${this.savings} in the piggy bank`;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.savings+=amount; // You can add money to your savings
      console.log(`Deposit ${amount} into the piggy bank`);
    }
  }
}

const myPiggyBank = new PiggyBank();
console.log(myPiggyBank.checkSavings());
myPiggyBank.deposit(5); // Deposited $10 into the piggy bank.
console.log(myPiggyBank.checkSavings());