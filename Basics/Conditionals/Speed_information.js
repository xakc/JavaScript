function speedInfo (arg1) {

    let speed = Number(arg1);

    if (speed<=10.00) {
        console.log("slow")
 
    } 
    if (speed>=10.01 && speed<=50.00){
        console.log("average")
    } 
    
    if (speed>=50.01 && speed<=150.00) {
        console.log("fast")
    }

    if (speed>=150.01 && speed<=1000.00) {
        console.log("ultra fast")
    }

    if (speed>1000.01) {
        console.log("extremely fast")
    }

}

speedInfo("50.15")