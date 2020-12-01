function primeNum(a) {
    
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            // return i;
    console.log(`${a} ne prostoe cislo, deliteli ${i}`);
        
        } else {
            // return a;
    console.log(`${a} prostoe cislo`)
            
        }
    }
}

primeNum(12);