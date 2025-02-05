import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const getBackgroundColor = (count: number) =>
    `rgba(0, 0, 255, ${count / 100})`;

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(count),
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4">Counter: {count}</Typography>
      <Button onClick={increment}>+</Button>
      <Button onClick={reset}>Reset</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};

export default Counter;
