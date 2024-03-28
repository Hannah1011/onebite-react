//단락 평가
//-> 특정 상황에서 어떠한 함수를 호출하지 않도록 방지하거나, 또는 어떠한 값들을 굳이 계산하지 않도록 제한하는 등 다양한 기능 구현 가능해진다.

function returnFalse() {
  console.log("False함수");
  return false;
}

function returnTrue() {
  console.log("True함수");
  return true;
}

function returnFalsy() {
  console.log("Falsy함수");
  return undefined;
}
//console.log(returnFalse() && returnTrue());
//false 함수라는 메시지 함수만 출력이 되었고, 그 뒤에 바로 연산의 결과 값이 출력됨.(단락평가가 일어난 것이다)

//console.log(returnTrue() && returnFalse());

//console.log(returnFalsy() && returnTrue()); //Falsy 함수 undefined

//2. 단락평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); //undefiined
printName({ name: "김혜나" }); //person이 truthy해서 name 에 person.name이 저장된다.

//Truthy || Truthy : 앞에 Truthy 값이 저장된다.
//Truthy && Truthy : 뒤에 Truthy 값이 저장된다.
