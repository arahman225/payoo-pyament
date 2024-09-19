// Feature ---------------------------

document.getElementById('cashing-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    
    const addMoneyStyling = document.getElementById('addingmoney');
    const cashOutMoneyStyling = document.getElementById('cashing-out');
    cashOutMoneyStyling.style.background = 'red';
    cashOutMoneyStyling.style.color = 'white';
    addMoneyStyling.style.background = '';
    addMoneyStyling.style.color = '';

})

const addMoneyStyling = document.getElementById('addingmoney');
addMoneyStyling.style.background = 'green';
addMoneyStyling.style.color = 'white';

document.getElementById('addingmoney').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')

    const addMoneyStyling = document.getElementById('addingmoney');
    const cashOutMoneyStyling = document.getElementById('cashing-out');
    cashOutMoneyStyling.style.background = '';
    cashOutMoneyStyling.style.color = '';

    addMoneyStyling.style.background = 'green';
    addMoneyStyling.style.color = 'white';
})

// document.getElementById('cashing-out').addEventListener('click', function(){
//     document.getElementById('')
// })


