// deposit button hendler
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deopsited 
    const depositInput = document.getElementById('deposit-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // deposit filed update 
    const depositTotal = document.getElementById('current-amount');
    const previousDepositText = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositText);
    const newDepositTotal = previousDeposit + depositAmount;
    depositTotal.innerText = newDepositTotal;

    // balance filed update 
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    const newBlanceTotal = previousBalance + depositAmount;
    balanceTotal.innerText = newBlanceTotal;

    //clear deposit input fild
    depositInput.value = '';

});
// withdrow button handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdrow-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    const newWithdrawTotal = withdrawTotalAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // balance update 
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    const newBlanceTotal = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = newBlanceTotal;

    // clear withdraw input filed
    withdrawInput.value = '';
})