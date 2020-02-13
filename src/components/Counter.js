import React from 'react';

export default function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
    color
}) {
    const style = {color}
    return(
        <div>
            <h1 style={style}>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}