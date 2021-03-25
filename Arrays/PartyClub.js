function partyClub(commands){
    let guestArray=[];

    for (const command of commands) {
        let name = commands.split(" ")[0];

        if(!command.includes("not")) {
            if(!guestArray.includes(name)){
                guestArray.push(name);
            }  else if (guestArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
        } else if (command.includes("not")){
            if(guestArray.includes(name)){
                let index = guestArray.indexOf(name);
                guestArray.splice(index,1);
            } else if(!guestArray.includes(name)){
                console.log(`${name} is not in the list!`)
            }
        }  

    guestArray.forEach(name=> console.log(name));
}

partyClub(
        [
            'Allie is going!',
            'George is going!',
            'John is not going!',
            'George is not going!'
        ]
)