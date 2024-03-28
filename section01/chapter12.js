//12. 함수 표현식과 화살표 함수

function funcA() {
  //console.log("funcA이다");
}

let varA = funcA; // 이렇게 함수를 다른 변수에 저장할 수 있다.
varA();

let varB = function funcB() {
  //console.log("funcB이다");
};

varB();
//주의할점
//-> funcB(); 이렇게 실행 시키면 Reference Error가 나온다.

//함수표현식
let varC = function () {
  console.log("funcC이다");
};
varC();

//화살표 함수
let varD = () => {
  return 1;
};
console.log(varD());
//만약에 그 함수가 위에처럼 return만 한다면!!!
//let varD = () => 1; 라고 쓸 수 있다.

//매개변수를 원한다면!!
let varE = (value) => {
  console.log(`value는 ${value}이다.`);
  return value + 1;
};
console.log(varE(20));
