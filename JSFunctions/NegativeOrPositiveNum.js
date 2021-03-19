function negativeOrPositiveNum(arr) {

    let result = [];

    for(let i = 0; i>arr.length; i++){
        
        let currNum = arr[i];

        if (currNum <=0) {
            result.unshift(currNum);
        } else {
            result.push(currNum);
        }

    }

    console.log(result.join('\n'));


    console.log('The program ends here')

}

negativeOrPositiveNum([7, -2, 8, 9]);