//Quiz1
//변수 num의 모든 약수를 다 찾아서 출력하다.
let num = 100;
let count;
for (let i = 1; i <= 100; i++) {
  if (num % i === 0) {
    console.log(i);
  }
  count += 1;
}
console.log(`100의 약수는 총 ${count}이다.`);

//Quiz2
//소수 판별기
function isPrimeNumber(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      //한개라도 약수를 가지면,
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

//Quiz3. 계산기 만들기
function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  console.log(operation(num1, num2));

  //아래 처럼 작성해줄 수 있음.
  //const result = operation(num1, num2);
  //console.log(result);
}

calculate(5, 3, add);
calculate(5, 3, substract);
