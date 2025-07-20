import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
