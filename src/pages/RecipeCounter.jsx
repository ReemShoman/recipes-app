import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounterByOne,
  increaseByCount,
  increaseCounterByOne,
  resetCounter,
} from "../store/slices/counter";

export default function RecipeCounter() {
  const [inputVal, setInputVal] = useState(0);
  const counterVal = useSelector((state) => state.counter.counterVal);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <h3>Recipe Counter</h3>
      <hr />
      <input
        value={inputVal}
        className="form-control my-2"
        placeholder="counter value"
        type={"number"}
        onChange={handleChange}
      />
      <button
        className="btn btn-primary"
        onClick={() => dispatch(increaseByCount(Number(inputVal)))}
      >
        Increase by count
      </button>
      <h4>Counter : {counterVal}</h4>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decreaseCounterByOne())}
        >
          -1
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => dispatch(increaseCounterByOne())}
        >
          +1
        </button>
        <button
          className="btn btn-info"
          onClick={() => dispatch(increaseByCount(5))}
        >
          +5
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={() => dispatch(increaseByCount(10))}
        >
          +10
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(resetCounter())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}