import React from "react";
import { useSelector } from "react-redux";

const CounterOutput = () => {
  const counter = useSelector((state) => state.counter);
  return <div className="output">{counter}</div>;
};

export default CounterOutput;
