import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/counter.css";
import "../styles/common.css";


const Counter = () => {
    const navigate = useNavigate();
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

    const handleNext = () => navigate("/todolist");

    return (
        <div className="common-container">
            <div className="counter-container">
                <Link
                    to="/"
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        display: "inline-block",
                        marginBottom: "15px",
                        textDecoration: "none",
                        color: "#2563eb",
                        fontWeight: "500",

                    }}
                >
                    ⬅ Back to Home
                </Link>
                <header>
                    <h1>Counter App</h1>
                </header>

                <section className="count-container">
                    <h2 className="count-style">{count}</h2>
                </section>

                <section className="button-group">
                    <button className="button-style" onClick={handleIncrement}>+1</button>
                    <button className="button-style" onClick={handleDecrement} disabled={count === 0}>-1</button>
                    <button className="button-style" onClick={handleReset}>Reset</button>
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
                <footer className="counter-footer">
                    <button onClick={handleNext}>Next</button>
                </footer>
            </div>
        </div>

    );
};

export default Counter;
