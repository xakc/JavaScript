function distinctArray(arr){
    let uniqueElements = [];

    for (const elem of arr) {
        
        if(!uniqueElements.includes(elem)){
            uniqueElements.push(elem);
        }
    }

    console.log(uniqueElements.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);