function storageFun(input) {
    
let storage  = {};

for (const line in input) {
        
    const [item, quantityInput] =line.split(" ");
    let quantity = Number(quantityInput);
  
    if ( storage.has(item)){
        
        storage.set(item,storage.get(item)+quantity);
    }
  
    storage.set(item ,quantity);

    }

     storage.forEach((v,k)=> console.log(`${k} - > ${v}`));
}

storageFun(
    [
        'tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40'
    ]

)