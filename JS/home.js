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
})