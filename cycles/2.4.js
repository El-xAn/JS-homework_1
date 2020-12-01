function faktorial(num) {
if (num == 0) {
  return 1;
} else {
  let j = 1;

  for (let  i = 1; i <= num; i++) {
    j *= i;
  }
  return j ;
}
}