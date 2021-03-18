function oddAndEvenSum(arrInput) {

    let nums = arrInput.split("").map(e=> parseInt(e));
    let oddSum=0;
    let evenSum=0;


    for( let i = 0; i < nums.length; i++){
        
        if(nums[i]%2===0){
            evenSum+=nums[i];
        }else{
            oddSum+=nums[i];
        }
    }

 
    console.log(`Odd sum = ${oddSum.toFixed(2)}, Even sum = ${evenSum.toFixed(2)}`)
   

}

oddAndEvenSum('1000435');