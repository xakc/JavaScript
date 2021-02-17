function sumSeconds(arg1,arg2,arg3) {
        
    let firstTime = Number(arg1);
    let secondTime = Number(arg2);
    let thirdTime = Number(arg3);

    let totalTime = Number(firstTime + secondTime + thirdTime);
    
    let seconds  = Number(Math.floor(totalTime%60));
    let minutes = Math.floor(totalTime/60);

    if(seconds<10){
            console.log(`${minutes}:0${seconds}`)
        }else {

            console.log(`${minutes}:${seconds}`)
        }
}

sumSeconds(
    "35", "45", "44"
    );