// add money to the account

//step 1- add an event handler to the add money button inside the form
document.getElementById('button-add-money').addEventListener('click' , function(event){
    //prevent page reload after form submit
    event.preventDefault();

    //step 2 - get money to be added to the account
    const inputAmount = document.getElementById('input-amount').value
    console.log(inputAmount)

    //get the pin number provided
    const inputPassword = document.getElementById('input-password').value;
    console.log(inputPassword)

    // step 3 - verify pin number
    if(inputPassword === '1234'){
        console.log('adding money to your account')

        //step 4 - get the current value
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        //step 5 - add inputAmount with balance
        const numberOfAmount = parseFloat(inputAmount);
        const numberOfBalance = parseFloat(balance)
        const newBalance = numberOfAmount + numberOfBalance
        console.log(newBalance);

        //step 6 - update the balance in UI/DOM
        document.getElementById('account-balance').innerText = newBalance;


    }else{
        alert('Failed to add money! Please try again')
    }
})