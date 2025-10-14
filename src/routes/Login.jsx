// The form should contain the following:

// Two input fields — Email and Password.

// A Login button that remains disabled until both fields are valid.

// Perform form validation:

// Email must follow a valid email format (e.g., user@example.com
// ).

// Password must be at least 6 characters long.

// Show error messages below each field when the input is invalid or left empty after being touched.

// On successful validation and submission, display a success message such as “Login successful!”.

// (Bonus) Add simple styling to make the form visually appealing and centered on the page.

import { useState } from "react";

const ValidationForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const validateForm = () => {
        let newErrors = {};
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!password || password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccess("✅ Login Successful!");
            setEmail("");
            setPassword("");
            setErrors({});
        } else {
            setSuccess("");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                gap: "10px",
            }}
        >
            <h2>Login Form</h2>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "250px",
                }}
            >
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>
                </div>

                <button type="submit" disabled={!email || !password}>
                    Login
                </button>
            </form>

            {success && <div style={{ color: "green", marginTop: "10px" }}>{success}</div>}
        </div>
    );
};

export default ValidationForm;
