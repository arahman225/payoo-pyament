// Add money from setup

document.getElementById('add-money-btn').addEventListener('click', function(event){

    event.preventDefault();

    const addMoneyField = document.getElementById('add-money-field').value;
console.log(addMoneyField)
    const pinNumber = document.getElementById('input-pin-number').value;

    console.log(addMoneyField, pinNumber)
})