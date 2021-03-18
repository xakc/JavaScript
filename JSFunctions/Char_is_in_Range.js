function charIsInRange(startChar, endChar) {

    let start = startChar.charCodeAt(0);
    let end = endChar.charCodeAt(0);
    let charToBeInRange = [];

    for(let i = start+1; i <end; i++) {
        charToBeInRange.push(i);
    }

    console.log(charToBeInRange);

}

function charIsInRange('a' ,'b');