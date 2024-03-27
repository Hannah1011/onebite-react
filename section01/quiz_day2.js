//1. Quiz1
const x = 15;
const y = 20;

let max = x >= y ? x : y;
console.log(max);

//2. Quiz 2
const a = true;

switch (typeof a) {
  case "number": {
    console.log("숫자");
    break;
  }
  case "string": {
    console.log("문자열");
    break;
  }
  case "boolean": {
    console.log("불리언");
    break;
  }
  case "null": {
    console.log("널");
    break;
  }
  case "undefined": {
    console.log("언디파인");
    break;
  }
  case "object": {
    console.log("객체");
    break;
  }
}

//3. Quiz3
let temperature = 10;

if (temperature < 0) {
  console.log("매우추움");
} else if (temperature >= 0 && temperature < 10) {
  // 또는 else if (temperature < 10)
  console.log("추움");
} else if (temperature >= 10 && temperature < 20) {
  // 또는 else if (temperature < 20)
  console.log("적당");
} else {
  console.log("더움");
}
