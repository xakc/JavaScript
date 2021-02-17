function cinema(arg1,arg2,arg3){

    let type = String(arg1);
    let rowCount = Number(arg2);
    let columnCount = Number(arg3);

    let totalSeats= rowCount * columnCount;

    let premierePrice = Number(12.00);
    let normalPrice = Number(7.50);
    let discountPrice = Number(5.00);

    let totalNormalIncome = totalSeats * normalPrice;
    let totalPremirIncome = totalSeats * premierePrice;
    let totalDiscouIncome = totalSeats * discountPrice;


    switch (type) {
        
        case "Premiere": console.log(totalPremirIncome.toFixed(2)+ " leva") ;break;
        case "Normal": console.log(`${totalNormalIncome.toFixed(2)} leva`) ;break;
        case "Discount": console.log(`${totalDiscouIncome.toFixed(2)} leva`);break;

        default: console.log("Please add a vaid movie screening type.")

    }

}

cinema("Normal",
        "21",
        "13"

)