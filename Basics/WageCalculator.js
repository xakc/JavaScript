function wageCalculator(input) {
     
    let index = 0;
    let openTabs = parseInt(input[index]);
    index++;  
    let totalSalary = parseInt(input[index]);
    index++;  

    for(let i = 0; i <openTabs; i++) {

        let name = input[index];

        if (name === "Facebook") {
            totalSalary-=150;
        } 
        else if (name === "Instagram" ){
            totalSalary -= 100;
        }
        else if (name === "Reddit") {

            totalSalary -= 50;
        }
    }
    if(totalSalary>0){
        console.log(totalSalary.toFixed(0));
    } else {
        console.log("You have lost your salary.");
    }
}

wageCalculator(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
