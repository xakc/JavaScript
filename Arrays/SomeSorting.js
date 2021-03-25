function someSorting(arr){

    let sortedArr1 = arr.sort((a,b)=> a-b);
    console.log(sortedArr1.join(" "));

    while( arr.length>0){
        sortedArr1.push(arr.shift());
        sortedArr1.push(arr.pop());
    }
    console.log(arr.join(" "));
}

someSorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);