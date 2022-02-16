function getInputValue(inputId) {
    //get finance
    const inputFinance = document.getElementById(inputId);
    const financeText = inputFinance.value;
    const financeAmount = parseInt(financeText);
    //clear input field
    inputFinance.value = "";
    return financeAmount;
}
function getTotalIncome() {
    const incomeAmount = getInputValue('input-income');
    return incomeAmount;
}
function getTotalExpenses() {
    const expenseAmount = getInputValue('input-food') + getInputValue('input-rent') + getInputValue('input-cloth');
    return expenseAmount;
}


document.getElementById('btn-calculate').addEventListener('click', function () {

})
