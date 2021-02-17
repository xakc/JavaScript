function bookList(arg1,arg2 ,arg3) {

    let booksPages= Number(arg1);
    let readsPagesForHour = Number(arg2);
    let daysCount = Number(arg3);

    let timeToReadBook = booksPages / readsPagesForHour;
    let timeNeededToRead = timeToReadBook/daysCount;

    console.log(timeNeededToRead.toFixed(1));

}

bookList("212",
"20",
"2");
 