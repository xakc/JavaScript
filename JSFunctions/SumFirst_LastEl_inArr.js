 function sumFirstLastEl (arr) {

    
    let lastElem = arr.pop();
    let firstElem= arr.shift();

    let sum = Number(firstElem) + Number(lastElem);

    console.log(sum.toFixed(2) );

 
    
 }

 sumFirstLastEl([1, 2]);