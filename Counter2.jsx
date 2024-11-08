//화살표함수 방식
import { useState } from "react";

const Counter = () => {
  const [number, setnumber] = useState(0);

  const onIncrease = () => {
    setnumber((prev) => prev + 1);
  };

  const onDecrease = () => {
    setnumber((prev) => prev - 1);
  };
};

return (
  <div>
    <h1>{number}</h1>
    <button onClick={onIncrease}>+1</button>
    <button onClick={onDecrease}>-1</button>
  </div>
);
