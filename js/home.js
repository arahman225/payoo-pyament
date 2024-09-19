// Add money from setup

document.getElementById('add-money-btn').addEventListener('click', function(event){

    event.preventDefault();

    const addMoneyField = document.getElementById('add-money-field').value;
console.log(addMoneyField)
    const pinNumber = document.getElementById('input-pin-number').value;

    // Wrong way to check the pin number
    if(pinNumber === '16247'){
        console.log('Successfully added money')
        const balance = document.getElementById('balance').innerText; //if input field is, have to use .value or innerText
        const newBalance = addMoneyField;
        
        //==============  convert into number   ===-   -----+++++
        const balanceNumber = Number(newBalance)
        const addMoneyNumber = parseFloat(balance)
        const result = balanceNumber + addMoneyNumber;
        
        

    }else{
        alert('Faild to add money. Please try again later!')
    }
})