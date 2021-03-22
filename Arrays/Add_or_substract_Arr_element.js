function solution(input) {
    
    let inputAsString = String(input);
    let inputArr = inputAsString.split(",");

    let oldSum = Number(0);
    let newSum = Number(0);

    let resultArr =[];

    for (let i=0;i<inputArr.length;i++) {

      oldSum+=Number(inputArr[i]);

      if (inputArr[i]%2===0) {
        
        let currentIndex = Number(i);
        
        resultArr[i]=Number(inputArr[i])+currentIndex;
        
        newSum+= resultArr[i];

      } 
      else {
        
        let currentIndex = Number(i);
        
        resultArr[i]=Number(inputArr[i])-currentIndex;
        
        newSum+= resultArr[i];
      }
      
      
    }

    console.log(resultArr);
    console.log(oldSum);
    console.log(newSum);
}

solution([5, 15, 23, 56, 35]);