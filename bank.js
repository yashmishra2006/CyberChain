// Bank account data storage
let bankAccount = {
    balance: 1000, // Initial balance
    transactionHistory: []
};

// Function to deposit money
function deposit(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 0) {
                bankAccount.balance += amount;
                bankAccount.transactionHistory.push({ type: "Deposit", amount: amount });
                resolve(`Deposit of $${amount} successful. New Balance: $${bankAccount.balance}`);
            } else {
                reject("Deposit amount should be more than zero.");
            }
        }, 1000);
    });
}

// Function to withdraw money
function withdraw(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 0 && amount <= bankAccount.balance) {
                bankAccount.balance -= amount;
                bankAccount.transactionHistory.push({ type: "Withdraw", amount: amount });
                resolve(`Withdrawal of $${amount} successful. New Balance: $${bankAccount.balance}`);
            } else {
                reject("Insufficient funds or invalid amount.");
            }
        }, 1000);
    });
}

// Function to check balance
function checkBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Your current balance is $${bankAccount.balance}`);
        }, 500);
    });
}

// Example usage
deposit(500)
    .then((message) => {
        console.log(message);
        return withdraw(300);
    })
    .then((message) => {
        console.log(message);
        return checkBalance();
    })
    .then((balance) => {
        console.log(balance);
    })
    .catch((error) => {
        console.error("Transaction failed:", error);
    });
