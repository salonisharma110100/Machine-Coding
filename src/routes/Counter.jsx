import React, { useState } from "react";
import "../styles/counter.css";
import "../styles/common.css";


const Counter = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const handleIncrement = () => setCount(prev => prev + 1);
    const handleDecrement = () => setCount(prev => Math.max(prev - 1, 0));
    const handleReset = () => setCount(0);

    const handleInput = (e) => setInput(e.target.value);

    const handleApplyStep = () => {
        const step = Number(input);
        if (!isNaN(step)) {
            setCount(prev => Math.max(prev + step, 0));
            setInput("");
        }
    };

    return (
        <div className="common-container">
            <div className="container">
                <header>
                    <h1>Counter App</h1>
                </header>

                <section className="count-container">
                    <h2 className="count-style">{count}</h2>
                </section>

                <section className="counter-button-group">
                    <button className="counter-button-style" onClick={handleIncrement}>+1</button>
                    <button className="counter-button-style" onClick={handleDecrement} disabled={count === 0}>-1</button>
                    <button className="counter-button-style" onClick={handleReset}>Reset</button>
                </section>

                <section className="custom-step">
                    <input
                        className="text-input"
                        type="number"
                        placeholder="Step (+/-)"
                        value={input}
                        onChange={handleInput}
                    />
                    <button
                        className="apply-step"
                        onClick={handleApplyStep}
                        disabled={!input || isNaN(Number(input))}
                    >
                        Apply Step
                    </button>
                </section>

            </div>
        </div>

    );
};

export default Counter;
