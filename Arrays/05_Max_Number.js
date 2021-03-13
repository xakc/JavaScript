function maxNumber(arr1) {

    let maxNumber= Number.MIN_VALUE;
    let topInteger= [];

    for(let i = 0; i< arr1.length;i++ ) {

        let currenetElement = arr1[i];
        let isTopNumber = true;

        for(let j = i+1 ; j < arr1.length; j++) {
            
            if(currenetElement <=arr1[j]) {
                isTopNumber = false;
                break;

            }

        }

        if(isTopNumber){
            topInteger.push(currenetElement);
        } 

    }
    
    console.log(topInteger.join(" "));

}

maxNumber(

    [14, 24, 3, 19, 15, 17]
);
