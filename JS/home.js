// // add money to the account

// //step 1- add an event handler to the add money button inside the form
// document.getElementById('button-add-money').addEventListener('click' , function(event){
//     //prevent page reload after form submit
//     event.preventDefault();

//     //step 2 - get money to be added to the account
//     const inputAmount = document.getElementById('input-amount').value
//     console.log(inputAmount)

//     //get the pin number provided
//     const inputPassword = document.getElementById('input-password').value;
//     console.log(inputPassword)

//     // step 3 - verify pin number
//     if(inputPassword === '1234'){
//         console.log('adding money to your account')

//         //step 4 - get the current value
//         const balance = document.getElementById('account-balance').innerText;
//         console.log(balance)

//         //step 5 - add inputAmount with balance
//         const numberOfAmount = parseFloat(inputAmount);
//         const numberOfBalance = parseFloat(balance)
//         const newBalance = numberOfAmount + numberOfBalance
//         console.log(newBalance);

//         //step 6 - update the balance in UI/DOM
//         document.getElementById('account-balance').innerText = newBalance;


//     }else{
//         alert('Failed to add money! Please try again')
//     }
// })


//same work repeated for practice 
//------------------------------------------------------------------------------------
document.getElementById('button-add-money').addEventListener('click' ,function(event){
    event.preventDefault();
    //console.log('clicked btn')

const inputAmount = document.getElementById('input-amount').value;
const inputPassword = document.getElementById('input-password').value;
//console.log(inputAmount , inputPassword);
if(inputPassword === '1111'){
    //console.log('corect password, we added money')
    const accountBalance = document.getElementById('account-balance').innerText;
    const inputAmountNumber = parseFloat(inputAmount);
    const inputAccountBalance = parseFloat(accountBalance);
    const newBalance = inputAccountBalance + inputAmountNumber;
    console.log(newBalance);

    document.getElementById('account-balance').innerText = newBalance;

}else{
    alert('wrong password! please put into correct password')
}

})
