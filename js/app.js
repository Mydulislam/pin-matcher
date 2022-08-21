function generateRandom(){
    let pinRandom = Math.round(Math.random() * 10000);
    let pinRandomString = pinRandom + '';
    if(pinRandomString.length < 4){
        return generateRandom()
    }
    else{
        return pinRandomString;
    }
    
}
document.getElementById('generate-pin').addEventListener('click', function(){
    let randomPin = generateRandom();
    let displayPin = document.getElementById('display-pin');
    displayPin.value = randomPin;
})

// Matching calculate pin
document.getElementById('calculator').addEventListener('click', function(event){
    let buttonValue = event.target.innerText;
    let displayInputSelect = document.getElementById('typed-numbers');
    let displayInputValue = displayInputSelect.value;
    if(isNaN(buttonValue)){
        if(buttonValue === 'C'){
            displayInputSelect.value = '';
        }
        else if(buttonValue === '<'){
            let b = displayInputValue.split('');
            b.pop();
            displayInputValue = b.join('');
            displayInputSelect.value = displayInputValue;
        }
    }
    else{
        displayInputValue = displayInputValue + buttonValue;
        displayInputSelect.value = displayInputValue;
    }
})

// verify pin

document.getElementById('verify-pin').addEventListener('click', function(){
    let displayPin = document.getElementById('display-pin');
    let displayValuePin = displayPin.value;
    let inputPin = document.getElementById('typed-numbers');
    let inputPinValuePin = inputPin.value;

    let pinFail = document.getElementById('pin-failure');
    let pinSuccess = document.getElementById('pin-success');
    
    if(inputPinValuePin === ''){
        alert('please insert your pin');
        pinFail.style.display = 'none';
        pinSuccess.style.display = 'none'
        return
    }
    
    if(displayValuePin === inputPinValuePin){
        pinFail.style.display = 'none';
        pinSuccess.style.display = 'block'
    }
    else{
        pinFail.style.display = 'block';
        pinSuccess.style.display = 'none'
    }
})
