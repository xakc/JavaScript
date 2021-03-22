function processOddNums(arr){
    let oddNums = arr.filter(e => arr.indexOf(e)%2!=0);

    let doubledNums = oddNums.map(e=>e*2);
    let reversedNums = doubledNums.reverse();
    console.log(reversedNums);
}

processOddNums([10, 15, 20, 25]);


function solution2(arr){
    let result = arr.
                filter((e,i)=> i % 2 !=0).
                map(e => e*2).
                reverse();

    result.sort((a,b)=> a-b);
    console.log(result);
}

solution2([10, 15, 20, 25]);