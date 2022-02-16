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
    const incomeAmount = getInputValue('input-income');
    //get expenditures

})
