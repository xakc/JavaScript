function sovle(text){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = text.match(pattern);

    console.log(result);

}

sovle("Ivan Ivanov, Ivanko Ivanov, Ivan Ivanoff, Ivan Ivannnov, Ivan IVAnov, IVANOV ivan, Ivan")