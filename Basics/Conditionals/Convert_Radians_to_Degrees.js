function convertRadiansToDegrees(input){

    let radians = Number(input);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees.toFixed(0))

}

convertRadiansToDegrees("3.1416");