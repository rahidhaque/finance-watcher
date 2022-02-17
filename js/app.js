function getInputValue(inputId) {
    const inputFinance = document.getElementById(inputId);
    const financeText = inputFinance.value;
    //get input finance
    const financeAmount = parseFloat(financeText);

    //error checking for string value
    if (isNaN(financeText)) {
        document.getElementById('error-' + inputId).innerHTML = "Please Correct!! You Have entered a string value";
    }

    //error checking for empty field
    else if (financeText == "") {
        document.getElementById('error-' + inputId).innerHTML = "Please Fill the Field";
    }

    //error checking for negative value
    else if (financeAmount < 0) {
        document.getElementById('error-' + inputId).innerHTML = "You have entered a negative number";
    }


    //empty the error field for correct value
    else {
        document.getElementById('error-' + inputId).innerHTML = "";
        return financeAmount;
    }
}

function updateFinanceField(totalFieldId, totalFinance) {
    //update value operation
    const financeField = document.getElementById(totalFieldId);
    if (totalFinance > 0) {
        financeField.innerText = totalFinance;
    }
}
function getTotalIncome() {
    //get income
    const totalIncome = getInputValue('input-income');
    return totalIncome;
}

function getTotalExpenses() {
    //get expenses
    const totalExpenses = getInputValue('input-food') + getInputValue('input-rent') + getInputValue('input-cloth');
    return totalExpenses;
}

document.getElementById('btn-calculate').addEventListener('click', function (event) {
    const totalExpenses = getTotalExpenses();
    const totalIncome = getTotalIncome();


    //error check if income is greater than expenditure
    if (totalIncome < totalExpenses) {
        alert("Your Total Income is greater than expense");
    }

    else {
        //get total balance
        const totalBalance = totalIncome - totalExpenses;
        updateFinanceField('expense-amount', totalExpenses);
        updateFinanceField('balance-expense-amount', totalBalance);
    }
})

document.getElementById('btn-saving').addEventListener('click', function () {
    //get balance after expenses 
    const getBalance = document.getElementById('balance-expense-amount');
    const getBalanceAmount = parseFloat(getBalance.innerText);

    //get input savings percentage
    const inputSavingsPercentage = document.getElementById('input-saving');
    const getSavingsPercentage = parseFloat(inputSavingsPercentage.value);

    //get savings text
    const totalIncome = getTotalIncome();
    const getSavings = document.getElementById('saving-amount');

    //total savings calculation
    const totalSavings = (totalIncome / 100) * getSavingsPercentage;

    //get remaining balance text
    const remainingBalance = document.getElementById('balance-remain');
    const remainingBalanceAmount = getBalanceAmount - totalSavings;

    //error check if savings is greater than balance after expenses
    if (getBalanceAmount < totalSavings) {
        alert("Savings Amount exceeded than total balance");
    }
    else {
        updateFinanceField("saving-amount", totalSavings);
        updateFinanceField("balance-remain", remainingBalanceAmount);
        inputSavingsPercentage.value = "";
    }
})
