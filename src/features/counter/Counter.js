import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleDecrement = () =>
    count <= 0
      ? dispatch(() => console.log("No no no"))
      : dispatch(decrement());

  return (
    <div>
      <button aria-label="Decrement value" onClick={handleDecrement}>
        Decrement
      </button>
      <span> {count} </span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
