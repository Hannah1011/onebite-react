//1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

//animal = 123;
//이렇게 아예 새로운 걸 넣어버리려고 하면 오류가 나지만, 위에 처럼 저장되어있는 프로퍼티값을 수정하거나, 프로퍼티를 추가하는 것은 문제가 되지 않는다.

//2. method (메소드)
// -> 값이 함수인 프로퍼티를 말함.

const person = {
  name: "Hannah",
  //메소드
  sayHi: function () {
    console.log("안녕");
  },
  //메소드 선언 방식
  sayHi2() {
    console.log("안녕이 방식이 메소드 선언 방식이야~");
  },
};

person.sayHi();
person["sayHi2"]();
