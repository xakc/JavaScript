function magicSum(arr) {


    let ourSum = +arr[1];
    let mayArr =  arr[0].split(" ");

    let magic = [];

    for(let i = 0; i < mayArr.length -1; i++) {
        
        let currenetElement = parseInt( mayArr[i]);

        for(let j = i+1; j < mayArr.length; j++) {
                let secondCurrent = parseInt(mayArr[j]);

            let currSum = currenetElement+secondCurrent;

            if(currSum===ourSum) {
                magic.push(currenetElement+ " "+secondCurrent);

            }

        }

    }
    console.log(magic.join("\n"));
}

magicSum(

    ['1 7 6 2 19 23', '8']
);