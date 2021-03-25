function solution1(input){

    input  = input.sort(compareLength);

    function compareLength(a,b,) {
        if(a.length < b.length){
            return a.length - b. length;
        } else if (a.length === b.length) {

            return a >b ;
        } else if (a.length > b.length){
            return a.length - b.length;
        }
    };
    for (const elm of input) {
        console.log(elm);
    }
}

solution1(["alpha", "beta", "gamma"]);