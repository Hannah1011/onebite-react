//0. Truthy & Falsy 란?
// -> 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
//조건문을 간결하게 만들 수 있다!!

//1. falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //빅인티저 (아주아주 큰 숫자를 저장하는 데에 사용된다.)

if (!f1) {
  //true가 출력될 것이다.
  //console.log("이 변수는 falsy");
}

//2. Truthy 한 값
// -> 위의 Falsy 한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  //console.log("이 변수는 Truthy");
}

///3. 활용 사례

function printName(person) {
  console.log(person.name);
}

let person = {
  name: "김혜나",
};
printName(person);

//매개변수로 객체를 받을 것이라고 생각했는데 실제로는 Undefined 값이 들어오는 이 상황은 서비스를 개발할 때 자주 발생함.
//그래서 보통 이렇게 객체의 특정 프로퍼티에 접근하는 기능들을을 담고 있는 함수에서는 조건문으로 객체가 null 이거나 undefined가 아님을 확인해줘야 한다.

function printName2(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person2;
printName2(person2);

//truthy와 falsy 를 사용하면 아래처럼 바뀐다.
function printName3(person2) {
  if (!person2) {
    //falsy 라면, 이것이 true가 되어서 아래 코드가 실행됨.
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

printName3(person2);
