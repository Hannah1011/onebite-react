//13. 콜백 함수
//-> 자신이 아닌 다른 함수에, 인수로써 전달되는 함수를 의미함.

function main(value) {
  //console.log(value); 이렇게 하면 sub 함수 자체가 나온다.
  value();
}

function sub() {
  console.log("I am sub function.");
}

main(sub); //sub가 콜백함수이다.
//위처럼 해도 되고
/**
 * 1번
 main(function() {
    console.log("I am sub function");
});

 * 2번
 main(() => {
    console.log("I am sub function");
 });
*/
//이렇게 main 안에다가 넣어줘도 된다.

//콜백을 통해서 어떤 것을 할 수 있을까?
//2. 콜백함수 활용
function repeat1(count) {
  for (let idx = 1; idx <= count; idx++) {
    // console.log(idx);
  }
}

function repeatDouble1(count) {
  for (let idx = 1; idx <= count; idx++) {
    // console.log(idx * 2);
  }
}

repeat1(5);
repeatDouble1(5);
//위의 예시처럼 repeat과 repeatDouble과 같이 구조가 매우 흡사한 함수들을 구현해야 할 때가 있다.
//위에 처럼 중복코드를 발생시키는 것은 옳지 않다.

function repeat2(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat2(5, (idx) => {
  console.log(idx);
});

repeat2(5, (idx) => {
  console.log(idx * 2);
});
