import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <p>Vous avez cliqué {counter} fois</p>
      <button onClick={onDecrement} disabled={counter === 0} >
        -
      </button>
      <button onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default Home;
