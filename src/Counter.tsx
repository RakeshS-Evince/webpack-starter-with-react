import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Counter value: {counter}</h1>
            <button onClick={() => setCounter(p => p + 1)}>Increase</button>
        </div>
    )
}

export default Counter