// import { useState } from "react";
// import "../styles/common.css";

// const ValidationForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({});
//     const [success, setSuccess] = useState("");

//     const validateForm = () => {
//         let newErrors = {};
//         let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!email || !emailRegex.test(email)) {
//             newErrors.email = "Please enter a valid email address";
//         }
//         if (!password || password.length < 6) {
//             newErrors.password = "Password must be at least 6 characters long";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             setSuccess("✅ Login Successful!");
//             setEmail("");
//             setPassword("");
//             setErrors({});
//         } else {
//             setSuccess("");
//         }
//     };

//     return (
//         <div className="common-container">
//             <div className="container">
//                 <h2>Login Form</h2>
//                 <form
//                     onSubmit={handleSubmit}
//                     style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "10px",
//                         width: "250px",
//                     }}
//                 >
//                     <div>
//                         <label>Email: </label>
//                         <input
//                             type="email"
//                             placeholder="Enter email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
//                     </div>

//                     <div>
//                         <label>Password: </label>
//                         <input
//                             type="password"
//                             placeholder="Enter password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>
//                     </div>

//                     <button type="submit" disabled={!email || !password}>
//                         Login
//                     </button>
//                 </form>

//                 {success && <div style={{ color: "green", marginTop: "10px" }}>{success}</div>}
//             </div>
//         </div>
//     );
// };

// export default ValidationForm;


import { useState } from "react";
import "../styles/validationform.css";
import "../styles/common.css";

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
        <div className="common-container">
            <div className="container">
                <h2 className="form-title">Login Form</h2>

                <form onSubmit={handleSubmit} className="validation-form" autoComplete="off">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && (
                            <p className="error-text">{errors.password}</p>
                        )}
                    </div>

                    <button type="submit" disabled={!email || !password}>
                        Login
                    </button>
                </form>

                {success && <div className="success-text">{success}</div>}
            </div>
        </div>
    );
};

export default ValidationForm;
