document.getElementById('button-cashout').addEventListener('click' , function(event){
event.preventDefault();

const cashoutAmount = document.getElementById('input-cashout-amount').value;
const cashoutPassword = document.getElementById('input-cashout-password').value;
const accountBalance = document.getElementById('account-balance').innerText;
if(cashoutPassword === '1111'){
    console.log('money is reducing')
    const accountBalanceNumber = parseFloat(accountBalance);
    const cashoutAmountNumber = parseFloat(cashoutAmount);
    const newBalance = accountBalanceNumber - cashoutAmountNumber;
    console.log(newBalance);

    document.getElementById('account-balance').innerText = newBalance
}else{
    alert('Failed to cashout! please try again leter')
}

})