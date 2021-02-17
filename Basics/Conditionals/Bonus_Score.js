function bonusScore(arg1) {

    let points = Number(arg1);
    let bonus = 0.0;
    let additionalbons = 0.0;

    if (points <=100) {
        bonus +=5;        
    } 

    if (points >=101 && points<=999) {
        bonus = points * 0.2
    } 

    if (points >= 1000) {
        bonus = points * 0.1;
    }
    

    if (points % 2 === 0) {
        additionalbons+=1;
    } 
    if (points % 10===5);{
       additionalbons+=5
    }
      
    
    let result = points + bonus+additionalbons;

    console.log(result.toFixed(0))

}


bonusScore("20")