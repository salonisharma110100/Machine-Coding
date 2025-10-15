import { useState } from "react";
import "../styles/toggle.css";
import { Link } from "react-router-dom";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => setIsOn((prev) => !prev);

    return (
        <div className="toggle-container">
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
            <h2>🌗 Dark / Light Mode Toggle</h2>
            <div className="toggle-wrapper" onClick={handleToggle}>
                <div className={`toggle-circle ${isOn ? "on" : "off"}`}></div>
                <span className={`toggle-label ${isOn ? "on" : "off"}`}>
                    {isOn ? "Dark Mode" : "Light Mode"}
                </span>
            </div>

            <div className={`preview ${isOn ? "dark" : "light"}`}>
                <p>{isOn ? "Dark mode is active 🌙" : "Light mode is active ☀️"}</p>
            </div>
        </div>
    );
};

export default Toggle;
