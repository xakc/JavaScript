function mergeArrays(arr1,arr2){
   
    let resultArr = [];
    
    for( let i = 0 ; i < arr1.length; i ++) {

        if(i%2===0){
            
            let addNumber = Number(arr1[i]) + Number(arr2[i]);

            resultArr.push(addNumber);

        } else  {

            let arr1_string_value =  `${arr1[i]}`;
            let arr2_string_value =  `${arr2[i]}`;
            let addElement = arr1_string_value+arr2_string_value;


            resultArr.push(addElement);
        }
    }
    
    console.log(resultArr.join(" - "));
}


mergeArrays(
    ["5", "15", "23", "56", "35"],
    ["17", "22", "87", "36", "11"]
);
