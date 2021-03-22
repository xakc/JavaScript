function commonElements (arr1,arr2){
    

    for(let i = Number(0); i< arr1.length; i++) {

        for(let j = Number(0); j< arr2.length;j++){
         
            if(arr1[i]===arr2[j]){
                console.log(arr1[i]);
            }   

        }
    }

}

console.log("the program ends here");
commonElements(
    ["Hey", "hello", 2, 4, "Pesho", "e"], 

    ["Pecho", 10, "hey", 4, "hello", "2"]
)


function solution2 (arr1,arr2) {
    for (let element of arr1) {
        if(arr2.includes(element)){
            console.log(element)
        }

    }

}

solution2(
    ["Hey", "hello", 2, 4, "Pesho", "e"], 
    ["Pecho", 10, "hey", 4, "hello", "2"] 
);