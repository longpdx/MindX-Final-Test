function calculate() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  let primes = [];
  let sum = 0;

  for (let i = a; i <= b; i++) {
      let isPrime = true;

      if (i < 2) {
          isPrime = false;
      }

      for (let j = 2; j < i; j++) {
          if (i % j === 0) {
              isPrime = false;
              break;
          }
      }

      if (isPrime) {
          primes.push(i);
          sum += i;
      }
  }

  let result = `Các số nguyên tố từ ${a} đến ${b} là: ${primes.join(", ")}. Tổng các số nguyên tố là: ${sum}.`;
  document.getElementById("result1").innerHTML = result;
}
