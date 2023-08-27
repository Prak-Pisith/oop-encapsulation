var PiggyBank = /** @class */ (function () {
    function PiggyBank() {
        this.savings = 0; // This is hidden and can only be changed from inside
    }
    PiggyBank.prototype.checkSavings = function () {
        return "You have ".concat(this.savings, " in the piggy bank");
    };
    PiggyBank.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.savings += amount; // You can add money to your savings
            console.log("Deposit ".concat(amount, " into the piggy bank"));
        }
    };
    return PiggyBank;
}());
var myPiggyBank = new PiggyBank();
console.log(myPiggyBank.checkSavings());
myPiggyBank.deposit(5); // Deposited $10 into the piggy bank.
console.log(myPiggyBank.checkSavings());
