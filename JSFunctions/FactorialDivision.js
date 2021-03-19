function factorialDivision(arg1,arg2){

    let num1 = parseInt(arg1);
    let num2 = parseInt(arg2);

    function factorialCalculator(number){
        let factorial = 1;
        for(let i = 1; i <= number; i++) {
            factorial *=i;
        }
        return factorial;
    }

    let firstNumFactorial = factorialCalculator(num1);
    let secondNumFactorial = factorialCalculator(num2);

    let result = firstNumFactorial/secondNumFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5,2);