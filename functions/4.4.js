function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let xa = getRandom(-10, 10)
let ya = getRandom(-10, 10)
let xb = getRandom(-10, 10)
let yb = getRandom(-10, 10)

let dist = Number((xb - xa) ** 2 + (yb - ya) ** 2);
let i = Math.sqrt(dist);


console.log(`расстояние между точками a(${xa}, ${ya}) и b(${xb}, ${yb}) в двумерном декартовом пространстве равно: ${i - 1}`);