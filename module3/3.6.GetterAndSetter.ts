{
    // getter and setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }
        // normal 
        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }

        // setter method
        set deposit(amount: number) {
            this._balance = this._balance + amount
        }

        // normal
        // public getBalance() {
        //     return this._balance
        // }

        //using getter
        get balance() {
            // property er moto behave korbe 
            return this._balance;
        }
    }


    const goribAccount = new BankAccount(111, "Goribs", 20)

    // // goribAccount.addDeposit(20) function call korte hocche
    goribAccount.deposit = 30

    // const myBalance = goribAccount.getBalance(); //function call korte hocche
    const myBalance = goribAccount.balance;
    console.log(myBalance)
}