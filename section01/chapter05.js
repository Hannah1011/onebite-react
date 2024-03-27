//1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
// -, + , * , / 연산이 다 가능.
console.log(num1 % num2); //모듈러 연산이라고 부른다. (나머지를 구해주는 연산)

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; //말도 안되는 연산을 시켰을 때 콘솔창에 NaN 이 표시되는 것을 알 수 있을 것이다.

//2. String Type
let myName = "김혜나"; //작은 따옴표 또는 큰 따옴표 꼭 사용.
let myLocation = "약수";
let introduce = myLocation + "에 사는 " + myName;

let introduceText = `${myName}은 ${myLocation}에 거주한다!`; //탬플릿 리터럴 문법(중요!!!)
//백틱을 통해서 문자열을 구현하면 중괄호와 달러사인을 통해서 변수의 값을 동적으로 문자열에 포함시킬 수 있다.

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없다)
let empty = null; // empty 변수에 아무것도 없다를 의미한다.

//5. Undefined Type
let none;

//Undefined는 실제로 변수를 선언하고 아무런 값도 할당하지 않았을 때 자동으로 들어가게 되는 것이다.
//반면에, Null은 우리가 명시적으로 변수에 할당해야하는 값이다.
