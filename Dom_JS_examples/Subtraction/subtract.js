function subtract() {
     let firstNum = Number(document.getElementById('firstNumber').value);
     let secondNum = Number(document.getElementById('secondNumber').value);

    let result = Number(firstNum-secondNum);

    let div = document.getElementById('result');
    
    
    div.innerHTML = result;

}