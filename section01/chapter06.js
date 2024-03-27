//1. 묵시적 형 변환
// -> 자스크립트 엔진이 알아서 형 변환
let num = 10;
let str = "20";

const result = num + str;
console.log(result);

//2. 명시적 형 변환
// -> 프로그래머가 내장 함수 등을 이용해서 직접 형 변환을 명시
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
//문자열까지 포함되어 있는 것을 형변환하고 싶을 때는 parseInt
let strToNum2 = parseInt(str2); //숫자가 앞쪽에 나와있어야 한다.

//Number할 경우 NaN이 뜬다.
let strToNum3 = Number(str2);
console.log(30 + strToNum2);
console.log(30 + strToNum3);

//->숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
