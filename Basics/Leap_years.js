function leap_years (arg1, arg2) {

    let leapYear = Number(arg1);
    let endPeriod = Number(arg2);


    for(let i = leapYear; i < endPeriod; i=Number(4+i)) {


        console.log(i);
    }

}

leap_years("1908","1919")