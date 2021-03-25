function objDemo(){
    let obj = {
        name : "Learning Org",
        age : 3
    }

    objDemo.kilograms = 88;
    obj['gender'] = 'male';

    delete obj.name; // Delete a proprety

    console.log(Object.keys(objDemo));

    let keys  = Object.keys(obj);
    let sortedKeys = keys.sort((a,b)=>a.localeCompare(b));

    sortedKeys.forEach(key=>console.log(key));

    // c
    if(!obj.hasOwnProperty('name')) {
       obj.car="fast";
    }
}

objDemo();