function arrayRotations(arr1, rotations){

    let arrSize = Number(arr1.length);
    let rotate = rotations% arrSize;

   

    for (let i=0; i < rotate; i++){
        
        let element = arr1.shift();
        arr1.push(element);
       
    }
    
    console.log(arr1.join(" "));

}


arrayRotations(

    [2, 4, 15, 31],
    2

);