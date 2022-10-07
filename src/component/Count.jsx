import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions/counter';

const Count = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: '5px', margin: '20px' }}>
      <h1>Aplikasi Counting</h1>

      <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0px', fontSize: '20px' }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button
            style={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'center', backgroundColor: '#8a4af3', color: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: '5px' }}
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <div style={{ width: '200px', padding: '10px', display: 'flex', justifyContent: 'center', fontSize: '25px' }}>{counter.value}</div>
          <button
            style={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'center', backgroundColor: '#8a4af3', color: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: '5px' }}
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <button
          onClick={() => dispatch(reset())}
          style={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'center', backgroundColor: 'tomato', color: 'white', cursor: 'pointer', border: '1px solid gray', borderRadius: '5px' }}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Count;
