function sovle (input) {
    let phoneBook = {};

   for (let i = o; i<input.length; i++) {
        let line = inpit[i].split(" ");

        let name = line[0];
        let number = line[1];

        phoneBook[name] = name;
        phoneBook[number] = number;
   }

   for (const name in phoneBook) {
       console.log(`${name} -> ${phoneBook[name]}`)
   }
}


sovle(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)