import { useState } from "react";

//함수 방식
function Counter() {
  const [number, setnumber] = useState(0);

  //핸들러 구성
  //더하는함수
  function onIncrease() {
    setnumber((prev) => prev + 1);
    //1더하기
  }
  //빼는 함수
  function onDecrease() {
    setnumber((prev) => prev - 1);
    //1빼기
  }

  //화면 랜더링 하는 부분
  //html,h1,h2,<br>,div
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
