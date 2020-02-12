import React from 'react';

export default function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}