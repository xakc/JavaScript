function PalindromeIntegers(nums) {

    let isPalindrome = (a,b)=> a===b;
    
    for(let i = 0; i< nums.length; i++){
        let currentNums = nums[i];

        let reversedNumber=Number(currentNums
                .toString()
                .split("")
                .reverse()
                .join(""));

        
        console.log(isPalindrome(currentNums,reversedNumber));

    }   
  

   
}

PalindromeIntegers([123,323,421,121]);