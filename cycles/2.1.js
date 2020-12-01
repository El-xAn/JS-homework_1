function range() {
   let j = 0;
   let count = 0;

   for (let i = 1; i < 99; i++) {
       if (i  % 2 == 0) {
           j += i;
           count ++;
       }
   }
   return `Sum of even numbers: ${j}, quantity: ${count}`;
}

console.log(range());