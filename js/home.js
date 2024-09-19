// Add money from setup

document.getElementById('add-money-btn').addEventListener('click', function(event){

    event.preventDefault();

    const addMoneyField = document.getElementById('add-money-field');
    const addMoneyValue = addMoneyField.value;

    const pinNumber = document.getElementById('input-pin-number').value;


    // Wrong way to check the pin number
    if(pinNumber === '1234'){
        console.log('Successfully added money')
        const balance = document.getElementById('balance').innerText; //if input field is, have to use .value otherwise innerText
        const newBalance = addMoneyValue;
        
        //==============  convert into number   ===-   -----+++++
        const balanceNumber = Number(newBalance)
        const addMoneyNumber = parseFloat(balance)
        
        const new_balance = balanceNumber + addMoneyNumber;
        

        // ==================   Update balance in the ui  -------------------
        
        document.getElementById('balance').innerText = new_balance;

        addMoneyField.value = '';
        document.getElementById('input-pin-number').value = '';

    }else{
        alert('Faild to add money. Please try again later!')
    }
})

document.getElementById('cash-money-btn').addEventListener('click', function(event){
    event.preventDefault()

    const usableBalance = document.getElementById('balance').innerText;

    const cashOutPin = document.getElementById('cash-out-pin-number').value;

    const cashMoney = document.getElementById('cash-money-field').value;

    if(cashOutPin === '1234'){

        const convertUsableBalance = Number(usableBalance);
        const convertCashMoney = parseInt(cashMoney);

        const total = convertUsableBalance - convertCashMoney;

        document.getElementById('balance').innerText= total;

    }else{
        alert('Failed to cash out')
    }
})
