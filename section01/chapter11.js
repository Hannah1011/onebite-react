//중복으로 작성된 유사한 기능들을 함수로 만든다!

//함수 선언
function greeting() {
  console.log("안녕!");
}
//함수를 선언했다고 실행이 되는 것이 아니다.

//greeting();

function getArea(width, height) {
  //매개변수를 선언해준다!
  let area = width * height;

  //function 안에 function 을 넣을 수 있다. (중첩함수)
  function another() {
    console.log("함수 안의 함수요~");
  }

  another();
  //console.log(area);
  return area; //반환값
  //return 문 아래에 어떠한 것을 써도 실행이 되지 않는다.
}

let area1 = getArea(10, 30); //return 문을 활용하면 다른 변수에 그 반환값을 저장할 수 있다.
console.log(area1);

let area2 = getArea(20, 60);
console.log(area2);

//선언이 이루어지지 않은 함수를 호출해도 문제가 되지 않는다.
//호이스팅 때문이다.
//-> 끌어올린다 라는 뜻!!
