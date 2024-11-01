// Problem-1
function calculateMoney(ticketSale: number): string | number {
    if (ticketSale < 0) {
        return 'Invalid Number';
    }
    const perTicketPrice = 120;
    const perGardPayment = 500;
    const perStaffLunchBill = 50;

    const totalTicketPrice = perTicketPrice * ticketSale;
    const totalGardPayment = perGardPayment * 1;
    const totalStaffLunchBill = perStaffLunchBill * 8;

    const totalExpenses = totalGardPayment + totalStaffLunchBill;
    const totalProfit = totalTicketPrice - totalExpenses;
    return totalProfit;
}

console.log(calculateMoney(-93));


// Problem-2
function checkName(name: string): string {
    if (typeof name !== 'string') {
        return 'invalid';
    } else {
        const arrCheck: string[] = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
        const lowerCaseCheckArr: string[] = arrCheck.map((element) => element.toLowerCase());

        if (lowerCaseCheckArr.includes(name[name.length - 1].toLowerCase())) {
            return 'Good Name';
        } else {
            return 'Bad Name';
        }
    }
}

console.log(checkName('Jhankar'));


// Problem-3
function deleteInvalids(array: any[]): string | number[] {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    } else {
        const newArray: number[] = [];
        for (const element of array) {
            if (typeof element === 'number' && !isNaN(element)) {
                newArray.push(element);
            }
        }
        return newArray;
    }
}

console.log(deleteInvalids({ num: [1, 2, 3] }));


// Problem-4
interface User {
    name?: string;
    birthYear?: number;
    siteName?: string;
}

function password(obj: User): string {
    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined) {
        return 'invalid';
    }

    const birthYearString = '' + obj.birthYear;
    if (birthYearString.length < 4) {
        return 'invalid';
    } else {
        const splitToArray = obj.siteName.split('');
        splitToArray.splice(0, 1, splitToArray[0].toUpperCase());
        const stringUpdate = splitToArray.join('');
        const passwordString = `${stringUpdate}#${obj.name}@${obj.birthYear}`;
        return passwordString;
    }
}

// console.log(password({ name: "maisha", birthYear: 2002, siteName: "example.com" }));


// Problem-5
function monthlySavings(arr: number[], livingCost: number): string | number {
    if (!Array.isArray(arr)) {
        return 'invalid input';
    }
    if (typeof livingCost !== 'number') {
        return 'invalid input';
    } else {
        let totalPayments = 0;
        let taxExpense = 0;
        for (const payments of arr) {
            totalPayments += payments;

            if (payments >= 3000) {
                const taxCut = payments * 0.2; // 20%
                taxExpense += taxCut;
            }
        }
        const totalExpenses = taxExpense + livingCost;
        const totalSavings = totalPayments - totalExpenses;
        if (totalSavings < 0) {
            return 'earn more';
        } else {
            return totalSavings;
        }
    }
}

// console.log(monthlySavings([900, 2700, 3400], 100));
