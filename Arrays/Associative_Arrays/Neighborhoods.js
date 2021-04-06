function neighborhoods(inputData) {
    let neighborhoods = inputData
                        .shift()
                        .split(" ");
    
    let result = new Map ();

    neighborhoods.forEach(n => result.set(n, []));
      

    for (const line of inputData) {
        let [neighborhood, name] = line.split(" - ");
          
        if(result.has(neighborhoods)) {
                let people = result.get(neighborhoods);
                people.push(name);

                result.set(neighborhoods,people);
        }
        
    }

    let output = [...result.entries()];

    console.log(output)
    
}

neighborhoods(
    [
        'Abbey Street, Herald Street, Bright Mews',
        'Bright Mews - Garry',
        'Bright Mews - Andrea',
        'Invalid Street - Tommy',
        'Abbey Street - Billy'
    ]

)