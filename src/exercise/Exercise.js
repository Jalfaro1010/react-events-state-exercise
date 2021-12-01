// 2A
import { useState } from 'react';

// 1A
function Exercise() {
  // 2C
  const [num, setNum] = useState(1);

  // 2D
  const addNum = () => setNum(num + 1);

  // 1C
  return (
    <section>
      {/* 1E */}
      <button onClick={() => alert("Congrats! You have clicked the button.")}>CLICK HERE</button>
      {/* 2B and 2E */}
      <button onClick={addNum}>STATE</button>
      {/* 2F */}
      <h1>{num}</h1>
    </section>
  );
}

// 1B
export default Exercise;