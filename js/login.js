
// document.getElementById('btn-login').addEventListener('click', function(event){
//     event.preventDefault()

//     const phoneNumber = document.getElementById('phone-number').value;

//     const pinNumber = document.getElementById('pin-number').value;

//     if(phoneNumber === '1515' && pinNumber === '16247'){
//         console.log('Login Successful')
//     }else{
//         alert('Wrong pin or phone number')
//     }
// })

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault()

    const phoneNumber = document.getElementById('phone-number').value;

    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '1234' && pinNumber === '1234'){
        console.log('Logged in successful')
        window.location.href = 'js/home.html'
    }else{
        alert('Wrong password or phone number')
    }
})
