function countWorlds(arg) {

    let text = String(arg);
    let count = Number(1);

    

    for(let i = 0; i< text.length; i++) {
        if(text[i]=== " ") {
            count++;
        }
    } 

    if (count <=10) {
        console.log("The message was send successfully!");
    } else {
        console.log(`The message is too long to be send! Has ${count} words.`);
    }
}

countWorlds(["This message has exactly eleven words. One more as it's allowed!"])