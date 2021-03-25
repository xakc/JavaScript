function invtry(input){
    let inventory = [];

    

    for (let inputRow of input){
        // let name = inputRow.split(" / ")[0];
        // let level = inputRow.split(" / ")[1];
        // let item =  inputRow.split(" / ")[2];

        let [name, level, items] = inputRow.split(" / ");

        level =+ level;
        items.split(", ");

        inventory.push({
            name: name,
            level: level,
            items: items

        });

    }

    console.log(JSON.stringify(inventory));
}

invtry(
        [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
        ]

)