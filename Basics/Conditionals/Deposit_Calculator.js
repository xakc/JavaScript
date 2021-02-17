function depositCalculator(arg1,arg2,arg3) {
    
    let money = Number(arg1);

    let depositPeriod= Number(arg2);

    let annualInterest= Number(arg3)/100;

    let calculateSumOfInterest = Number(money*annualInterest);
    let mountlyInterestRate = calculateSumOfInterest/12;
    let totalDeposit = money+(depositPeriod*mountlyInterestRate);

    
    console.log(totalDeposit);

}

depositCalculator("200","3","5.7");