function solve() {
    let input = document.getElementById('input');
    let text = input.innerText;

    let outputElement = document.getElementById('output');
    let sentances = text.split('.');

    while(sentances.length > 0) {
        let currentParagraph = sentances.splice(0,3).join('.');

        let paragraphElement = document.createElement('p');
        paragraphElement.innerText = currentParagraph;
        outputElement.appendChild(paragraphElement);
    }
    

}

  