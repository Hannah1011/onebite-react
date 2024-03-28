//스코프 : 범위라는 뜻이다.
//변수나 함수에 접근하거나 호출할 수 있는 범위를 말한다.
//-> 전역(전체 영역) 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능
let a = 1; //전역 스코프

function funcA() {
  let b = 2; //지역 스코프: 중괄호 안에 선언된 것
  console.log(a);
  function funcB() {} //함수선언식은 함수블록 안에서만 지역스코프 갖는다.
}

funcA();
//console.log(b); 오류남.

if (true) {
  let c = 1;
  function funcC() {
    console.log("지역스코프 아님~");
  } //얘는 지역 스코프가 아니다.
}
funcC();
