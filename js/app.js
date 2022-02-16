function getInputValue(inputId) {
    //get finance
    const inputFinance = document.getElementById(inputId);
    const financeText = inputFinance.value;
    const financeAmount = parseInt(financeText);
    //clear input field
    inputFinance.value = "";
    return financeAmount;
}


document.getElementById('btn-calculate').addEventListener('click', function () {
    //get income
    const totalIncome = getInputValue('input-income');
    //get expenses
    const totalExpenses = getInputValue('input-food') + getInputValue('input-rent') + getInputValue('input-cloth');
    const expensField = document.getElementById('expense-amount');
    expensField.innerText = totalExpenses;
})
