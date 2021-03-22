function train(wagons){

    let pplInWagons = wagons.
                            shift().
                            split(" ").
                            map(Number);
  
    let maxWagocCapacity = wagons.shift().map(Number);

    for (const commands of wagons) {
        
        let currentCommand = commands.split(" ");

        if(currentCommand[0]==="Add"){
            pplInWagons.push(currentCommand.map(Number));
        } 
        
        else {

            for (let i = 0; i < pplInWagons.length; i++) {
                if( pplInWagons[i]+ Number(currentCommand[0] <= maxWagocCapacity)){
                    pplInWagons.push(currentCommand[0]);
                }
            }
        }


    }



}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
