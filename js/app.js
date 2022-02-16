function getInputValue(inputId) {
    const inputFinance = document.getElementById(inputId);
    const financeText = inputFinance.value;
    if (isNaN(financeText)) {
        alert("Please Correct!! You Have entered a string value");
        return false;
    }
    else if (financeText == "") {
        alert("Please Correct!! Some of your field is empty");
        return false;
    }
    else {
        //get finance
        const financeAmount = parseFloat(financeText);
        if (financeAmount < 0) {
            alert("You have entered a negative number");
        }
        //clear input field
        inputFinance.value = "";
        return financeAmount;
    }
}
function updateFinanceField(totalFieldId, totalFinance) {
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

/* function getTotalBalance(totalIncome, totalExpenses) {
    const totalBalance = totalIncome - totalExpenses;
    return totalBalance;
} */

document.getElementById('btn-calculate').addEventListener('click', function (event) {
    const totalExpenses = getTotalExpenses();
    const totalIncome = getTotalIncome();
    const totalBalance = totalIncome - totalExpenses;
    if (totalIncome < totalExpenses) {
        alert("Your Total Income is greater than expense");
    }
    else {
        updateFinanceField('expense-amount', totalExpenses);
        updateFinanceField('balance-expense-amount', totalBalance);
    }
})
