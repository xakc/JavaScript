function gladiatorInventory(){

    let inventory = input.shift().split(" ");

    for (const element of input) {
        element = element.split(" ");
        
        let command = element[0];
        let equipment = element[1];

        if (command === "Buy") {

            if (!inventory.includes(equipment)){
                inventory.push(equipment);
            }

        } else if (command === "Trash") {
            if (inventory.includes(equipment){
                let trashIndex = inventory.indexOf(equipment);
                inventory.splice(trashIndex,1)
            }
        } elses if (command === "Repair") {
            if(inventory.includes(equipment)){
            let repairIndex = inventory.indexOf(equipment);
            inventory.splice(repairIndex,1);
            inventory.push(equipment);
            }
        } else if(command === "Upgrade")
    }


}

gladiatorInventory(['SWORD Shield Spear',
                    'Buy Bag',
                    'Trash Shield',
                    'Repair Spear',
                    'Upgrade SWORD-Steel'
                ]
);