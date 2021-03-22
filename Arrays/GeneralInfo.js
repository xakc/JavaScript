function generalInfo() {

    let capitals = ["Sofia", "Viena", "Paris", "Rome"]

    //ading by the end
    capitals.push("Budapest");
    console.log(capitals.join(" "))
    
    //delete the last element
    capitals.pop();
    console.log(capitals.join(" "))


    capitals.unshift("Skopie")
    console.log(capitals.join(" _ "))

    capitals.shift();

    //coping the needed arr
    let capitalsCopy = capitals.slice(0);

    let numbers = ["1","2","3","4"];

    numbers
        .map(num=>+num)
        .filter(num)=>num%2===0)
        .array.forEach(num=>console.log(num));

    
    let reversedArr = numbers.reverse();

    //Sorting arrs
    numbers.sort((a,b)=> a.length-b.length);
    numbers.sort((a,b)=> a.length-b.length);
    
        console.log("the program ends here")


}

generalInfo();
