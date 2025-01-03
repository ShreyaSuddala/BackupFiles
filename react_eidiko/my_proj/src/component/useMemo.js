import React, { useState, useMemo } from 'react';

function NumberSquare({ number }) {
  const squaredNumber = useMemo(() => {
    console.log(`Calculating the square of ${number}`);
    return number * number;
  }, [number]);

  return (
    <div>
      <p>{`${number} squared is: ${squaredNumber}`}</p>
    </div>
  );
}

function Appp() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Number Squares</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <NumberSquare number={number} />
    </div>
  );
}

export default Appp;
