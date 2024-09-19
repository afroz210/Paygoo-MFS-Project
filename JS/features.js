//show the cashout form

document.getElementById('btn-show-cashout').addEventListener('click' ,function(){

    //show cashout button clicked
    //console.log('clicked btn');
    document.getElementById('cash-out-form').classList.remove('hidden');

    //hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
});

// show add money form and hide the cash out form

document.getElementById('btn-show-addmoney').addEventListener('click' ,function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})