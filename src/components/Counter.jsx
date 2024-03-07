import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../sevices/actions/CounterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  return (
    <div>
      Counter App
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;

// redux plan

// 1. state - count: 0
// 2. actions - increment, decrement, reset
// 3. reducer - increment -> count => count + 1,
// - decrement -> count => count - 1
// - reset -> count => 0
// 4. store
// 5. providing store in react
// 6. use store
