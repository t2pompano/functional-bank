
// general function for get input field amount both deposit and withdraw input field...........>>>>
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';
    return amountValue;
}

// general function for get total amount both deposit and withdraw total field...........>>>>

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
// get current balance
function getCurrentBalanceTotal() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

// general function for update balance..........>>>
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalanceTotal();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}

// get deposit total.........>>>>
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});
// get withdraw total............>>>>
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalanceTotal = getCurrentBalanceTotal();
    if (withdrawAmount > 0 && withdrawAmount < currentBalanceTotal) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalanceTotal) {
        console.log('Your Balance as low as your withdraw total');
    }

});