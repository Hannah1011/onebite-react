//1. 객체 생성
let obj1 = new Object(); //객체 생성자를 활용해서 객체를 생성
let obj2 = {}; //객체 리터럴(대부분 사용)

//2. 객체 프로포티 (객체 속성)
//person 객체의 property -> key : value
//value에 어떠한 형태든 들어갈 수 있다. 예) 문자열, 배열, 숫자 등..
let person = {
  name: "김혜나",
  age: 24,
  hobby: "댄스",
  extra: {},
  10: 20, //key 에 숫자 사용 가능
};

//3. 객체 프로퍼티를 다루는 방법
//3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

let name = person.name; //존재하지 않는 property에 접근하고자 하면 undefined 가 출력될 것이다.
//console.log(name);

// - 괄호 표기법
let age = person["age"]; // 문자열로 작성을 해줘야지 key로 인식한다.

let property = "hobby";
let hobby = person[property];

//3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "샤브샤브";

//3.3 프로퍼티를 수정하는 방법
person.job = "student";

//3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

//3.5 프로퍼티 존재 유무 확인하는 방법 (in 연산자ㅏ)

let result1 = "name" in person;
let result2 = "cat" in person;
console.log(person); //객체를 출력한다.
