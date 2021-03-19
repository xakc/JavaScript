function passValidator(passInput) {
    
    let isValid = true;
    isWithInccorectElement = false;
    let digits = 0;

    if(passInput.length < 6 || passInput.length >10) {
        console.log("Password must be between 6 and 10 characters")
        isValid= false;
    }
    
    for (let index in passInput) {
         let asciElement = passInput.charCodeAt(index);
        
         if(48>asciElement || (asciElement > 57 && asciElement || asciElement>122 )){
            isWithInccorectElement = true;

         }

         if(48>=asciElement && asciElement<=57){
            digits++;

         }

         if(isWithInccorectElement){
             console.log("Password must consist only of letters and digits");
             isValid=false;
         }

         if(digits <2) {
             console.log ("Password must have at least 2 digits")
             isValid=false;
         }

         if(isValid=true){
             console.log("Password is valid");
         }
    }
}


passValidator('MyPass123');