import { useState } from "react";
import "../styles/toggle.css";
import "../styles/common.css";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => setIsOn((prev) => !prev);

    return (
        <div className="common-container">
            <div className="container">
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
        </div>
    );
};

export default Toggle;
