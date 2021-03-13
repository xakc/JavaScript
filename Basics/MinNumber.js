function minNumber(input){

    let index = 0;
    let n = parseInt(input[index]);
    
    index++
    
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i= 0; i<n; i++) {
        
        let num = Number(input[index]);

        index++;

        if (minNumber > num ) {

            minNumber= num;
        }
    }

    console.log(minNumber);
        

}

minNumber(["3",
"-10",
"20",
"-30"])
