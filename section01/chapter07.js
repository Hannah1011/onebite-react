//1. 대입 연산자
let var1 = 1; //왼: 값을 저장할 변수 이름 오른쪽: 저장할 값

//2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; //21

console.log(num1, num2, num3);

//3. 복합 대입 연산자 (산술과 대입 연산자가 복합으로 들어가있다!)

let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;
console.log(num7);

//4. 증감 연산자
let num8 = 10;
console.log(++num8); //전위 연산 11
console.log(num8++); //후위 연산  : 다음 라인부터 반영되는 것이다.
console.log(num8); //12

//5. 논리 연산자 true false
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not); //true false false

//6. 비교 연산자
// == : 값의 자료형은 비교해주지 않는다.  ===: 값과 그 자료형까지 비교해준다.
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
let comp3 = 1 === "1";
let comp4 = 1 == "1";
console.log(comp1, comp2, comp3, comp4);

let comp5 = 2 > 1;
let comp6 = 2 < 1;
let comp7 = 2 >= 1;
let comp8 = 2 <= 3;
console.log(comp5, comp6, comp7, comp8);
