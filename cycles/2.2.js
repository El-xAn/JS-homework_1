function primeNum(a) {
    let txt = ""

    for (let i = 2; i < a; i++) {
        if (a%i == 0) {
            
            
             `${a} ne prostoe cislo`
            break;
        } else {
            txt = `${a} prostoe cislo`
        }

          
            
    }
    return txt;
        
}

console.log(primeNum(121));