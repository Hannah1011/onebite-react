//1. if 조건문
let num = 10;

if (num >= 10) {
  console.log("numdms 10이상이다!");
  console.log("조건이 참이다!");
} //조건이 거짓일 떄는 콘솔창에 아무것도 출력되지 않는다.
//그래서 else 또는 else if를 붙여준다.
else if (num >= 5) {
  console.log("num 은 5이상이다.");
} else {
  console.log("조건이 거짓입니다!");
} //if로 시작하면 else if 가 아닌 else 로 끝나야 한다. 또는 if만 써줘야 함.

//2. Switch 문
// -> if 문과 기능 자체는 동일
// -> 다수의 조건을 처리할 떄 if보다 더 직관적이다.

let animal = "human";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }

  default: {
    console.log("그런 동물은 전 모릅니다.");
  }
}
