function distanceBetwenPoints(xa, ya, xb, yb) {
    
    let dist = Number((xb - xa) ** 2 + (yb - ya) ** 2);
    for (let i = 0; i < dist; i++) {
        let a = Number(i * i);
        if (a == dist){
        return i;
        }
    }

}

console.log(distanceBetwenPoints(1, 2, 3, 4))