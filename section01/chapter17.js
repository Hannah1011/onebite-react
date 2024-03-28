//1. 배열 생성 방법
let arrA = new Array(); // 배열 생성자
let arrB = []; //배열 리터럴

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
//배열 안에는 어떠한 타입이든 다 들어갈 수 있다. 예)객체, 함수, 배열, 문자, 숫자 등..
console.log(arrC);

//2. 배열 요소 접근 (0번부터 시작함.)
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2);
arrC[0] = "hello~ 1에서 인사로 바꿈요!";
console.log(arrC[0]);
