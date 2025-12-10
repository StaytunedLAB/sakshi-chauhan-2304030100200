// --------------------------------------------//
// Safe Bank Transaction Processing //
// --------------------------------------------//

// Safe number conversion
function toNumberSafe(value) {
    const num = Number(value);
    return Number.isFinite(num) ? num : null;
}

// Deposit operation
function handleDeposit(balance, amount) {
    const amt = toNumberSafe(amount);
    if (amt === null || amt <= 0) throw new Error("Invalid deposit amount");
    return balance + amt;
}

// Withdrawal operation
function handleWithdrawal(balance, amount) {
    const amt = toNumberSafe(amount);
    if (amt === null || amt <= 0) throw new Error("Invalid withdrawal amount");
    if (amt > balance) throw new Error("Insufficient account balance");
    return balance - amt;
}

// Core processing function
function processTransaction(input) {
    // Local result structure
    const response = {
        account: input?.account || null,
        previousBalance: null,
        newBalance: null,
        status: "failed",
        message: ""
    };

    try {
        const balance = toNumberSafe(input?.balance);
        const operation = input?.operation;
        const amount = input?.amount;

        if (balance === null) throw new Error("Invalid starting balance");

        response.previousBalance = balance;

        // Operation handling
        switch (operation) {
            case "deposit":
                response.newBalance = handleDeposit(balance, amount);
                break;
            case "withdraw":
                response.newBalance = handleWithdrawal(balance, amount);
                break;
            default:
                throw new Error("Unsupported operation");
        }

        response.status = "success";
        response.message = "Transaction completed";

    } catch (err) {
        response.message = err.message;
    } finally {
        // Guarantee final structure is always returned
        return response;
    }
}


// Test Calls// 
console.log(
    processTransaction({
        account: "SB-4021",
        balance: 1200,
        operation: "deposit",
        amount: 300
    })
);

console.log(
    processTransaction({
        account: "SB-4021",
        balance: 1200,
        operation: "withdraw",
        amount: 1500
    })
);
