function factorial(arg1){

    let imputNum = Number(arg1);
    let result = 1;

    for(let i = 1; i <=imputNum; i++) {

        result*=i
    }

    console.log(result)

}

factorial("8")