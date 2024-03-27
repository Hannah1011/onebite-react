for (let idx = 0; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue; //continue를 만나면 아래 코드는 실행시키지 않고 다믕 idx로 넘어간다.
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
