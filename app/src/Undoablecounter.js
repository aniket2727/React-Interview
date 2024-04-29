


// uncomplite undo and redo
import React, { useState } from 'react';
import './custom.css';

const Undoablecounter = () => {
  const [total, setTotal] = useState(0);
  const [counter, setCounter] = useState(0);
  const [newStack, setNewStack] = useState([]);

  const handleStack = (method, item) => {
    let newTotal;
    if (method === 'push') {
      newTotal = total + item;
    } else {
      newTotal = total - item;
    }
    setTotal(newTotal);
    setNewStack(prevStack => [{ method, totalprice: newTotal }, ...prevStack]);
    setCounter(prevCounter => prevCounter + 1);



    console.log(newStack)
  };

  const handleUndo = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
      setTotal(newStack[counter - 1].totalprice);
    }
  };

  const handleRedo = () => {
    if (counter < newStack.length - 1) {
      setCounter(prevCounter => prevCounter + 1);
      setTotal(newStack[counter + 1].totalprice);
    }
  };

  return (
    <div className='main-z'>
      <h1>{total}</h1>

      <div className='undoRedo'>
        <button onClick={handleUndo}>undo</button>
        <button onClick={handleRedo}>redo</button>
      </div>

      <div className='buttonsz'>
        <div>
          <button onClick={() => handleStack('pop', 100)}>-100</button>
          <button onClick={() => handleStack('pop', 10)}>-10</button>
          <button onClick={() => handleStack('pop', 1)}>-1</button>
        </div>

        <div>
          <button onClick={() => handleStack('push', 100)}>100</button>
          <button onClick={() => handleStack('push', 10)}>10</button>
          <button onClick={() => handleStack('push', 1)}>1</button>
        </div>
      </div>

      <div>
        {newStack.map((item, index) => (
           index >= counter ? (
            <div key={index}>
              <label>{item.method}</label>
              <label>{item.totalprice}</label>
            </div>
          ) : (null)
        ))}
      </div>
    </div>
  );
};

export default Undoablecounter;
