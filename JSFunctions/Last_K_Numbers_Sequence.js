function lastKnumberSequence(n,k){
    let result = [1]; 
    
    for (let i = 1; i<n; i++){
        let index = Math.max(i-k,0);
        let subArr = result.slice(index);
        let sum = 0;
        
        for (const num of subArr) {
            
        }
        
        if (index<0) {
            index=0;
       
        }
         
        let subArr= result.slice(index);

        let sum=0;

       for (const num of subArr) {
           sum+=num;
       }

       result.push(sum);

    }

    console.log(result);
}

lastKnumberSequence(6, 3);


function solution2(n,k) {
    let result = [1]; 
    
    for (let i = 1; i<n; i++){
        let index = i - k;
        let sum = subArr.reduce((sum,element)=>sum+element );
        result.push(sum)
    }  
}

solution2(6, 3);