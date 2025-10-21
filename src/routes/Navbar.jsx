import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2 className="nav-logo">⚙️ React Playground</h2>

            <button
                className="nav-toggle"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((s) => !s)}
            >
                <span className="hamburger" />
            </button>

            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
                <li><NavLink to="/counter" onClick={() => setOpen(false)}>Counter</NavLink></li>
                <li><NavLink to="/todolist" onClick={() => setOpen(false)}>To-Do List</NavLink></li>
                <li><NavLink to="/toggle" onClick={() => setOpen(false)}>Toggle</NavLink></li>
                <li><NavLink to="/searchfilter" onClick={() => setOpen(false)}>Search</NavLink></li>
                <li><NavLink to="/image-upload" onClick={() => setOpen(false)}>Upload</NavLink></li>
                <li><NavLink to="/productfilter" onClick={() => setOpen(false)}>Products</NavLink></li>
                <li><NavLink to="/bookmark" onClick={() => setOpen(false)}>Bookmarks</NavLink></li>
                <li><NavLink to="/memegenerator" onClick={() => setOpen(false)}>Meme</NavLink></li>
                <li><NavLink to="/quiz" onClick={() => setOpen(false)}>Quiz</NavLink></li>
                <li><NavLink to="/stopwatch" onClick={() => setOpen(false)}>Stopwatch</NavLink></li>
                <li><NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
// ...existing code...