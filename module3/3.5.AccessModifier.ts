{
    // access modifier

    // In programming, an access modifier is a keyword used to set the accessibility (or visibility) of classes, methods, and other members within a class. Access modifiers control where these elements can be accessed in a program, helping to protect data, control visibility, and enforce encapsulation.

    class BankAccount {
        // public o access modifire
        public readonly id: number; // modify kore fellam that eta change korte parbe na
        public name: string;
        // private _balance: number;
        // private means only class er moddhe modify korte parbo

        // jodi onno class eo use korte tchai tahle protected use korbo
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }
        public addDeposit(amount: number) {
            this._balance = this._balance + amount
        }

        public getBalance() {
            return this._balance
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this._balance
        }
    }

    const goribAccount = new BankAccount(111, "Goribs", 20)
    // goribAccount.id = 222; // change kore felte pari this is not right

    goribAccount.addDeposit(20)
    const myBalance = goribAccount.getBalance();
    console.log(myBalance)
}