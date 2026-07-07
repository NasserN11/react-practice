import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <h1>Counter</h1>

            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>Increase</button>

            <button onClick={() => {
                if (count > 0) setCount(count - 1);
            }}>Decrease</button>

            <button onClick={() => setCount(0)}>Reset</button>

            <p></p>

            <input
            type="text"
            value={inputValue}
            onChange = {(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
            />
            <p>You typed: {inputValue}</p>
        </div>
    );
};

export default Counter;