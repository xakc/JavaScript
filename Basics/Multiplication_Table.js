function solution(a){

   let inputNum = Number(a);

   for (let i = 1; i <=10; i++) {

    let result = inputNum * i
    
    console.log(`${i} * ${inputNum} = ${result}`)

   } 
}

solution("5")