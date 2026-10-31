// 24.1.  Sử dụng 'continue' và 'break
let n = 0;

// break
while (n < 100) {
  n++;
  if (n === 4) {
    break;
  }
  console.log(n);
}

// continue
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(i);
  }
}
