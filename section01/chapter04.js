//1. 변수
let age = 27; // 변수를 선언하고 초기값을 넣는다해서 초기화한다고 한다.
console.log(age);

age = 40; //언제든 바꿀 수 있다.
console.log(age);

//let age =40; 처럼 중복되는 변수 이름으로 선언할 수 없다.

//2. 상수
const birth = "2001.10.11"; //상수는 값을 변경하는 것이 불가능해서 무조건 처음에 이렇게 초기화 시켜줘야 한다.

//3. 변수 명명규칙(네이밍 규칙)
//3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

//3-2. 숫자로 시작할 수 없다.
let name1;

//3-3. 예약어를 사용할 수 없다.

//4. 변수 명명 가이드 (협업하는 사람이 알아볼 수 있게끔)
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
