import React, { useEffect, useState } from 'react';

const App = () => {
  const [color, setColor] = useState('red');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <div style={{ margin: '20px 10px', display: 'flex', gap: '10px' }}>
        <button type="button" onClick={() => setColor('blue')}>
          Blue
        </button>
        <button type="button" onClick={() => setColor('red')}>
          Red
        </button>
        <button type="button" onClick={() => setColor('pink')}>
          Pink
        </button>
        <button type="button" onClick={() => setColor('green')}>
          Green
        </button>
      </div>
      <div style={{ margin: '50px', width: '300px', height: '300px', border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px', borderRadius: '50%' }}>
        <h1>Waktu saat ini</h1>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    </>
  );
};

export default App;
