
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
    const projects = [
        { name: "Counter", path: "/counter", desc: "Simple counter app with increment/decrement functionality" },
        { name: "To-Do List", path: "/todolist", desc: "Task manager with add, delete and localStorage persistence" },
        { name: "Toggle Component", path: "/toggle", desc: "Switch UI state dynamically using React hooks" },
        { name: "Search Filter", path: "/searchfilter", desc: "Dynamic filtering of list items using search input" },
        { name: "Login Form Validation", path: "/login", desc: "Form with validation for email and password fields" },
        { name: "Stopwatch / Timer", path: "/stopwatch", desc: "Accurate timer with millisecond precision and pause/resume" },
        { name: "Quiz App", path: "/quiz", desc: "Interactive quiz with progress tracking and feedback" },
        { name: "Product Filter", path: "/productfilter", desc: "Dynamic product listing with search, category filter, and price sorting functionality" },
        { name: "Weather Dashboard", path: "/weather", desc: "Real-time weather dashboard fetching data from OpenWeather API with dynamic background updates and error handling" },
        { name: "Book Mark", path: "/bookmark", desc: "Dynamic product listing with search, category filter, and price sorting functionality" },
        { name: "Meme Generator", path: "/memegenerator", desc: "Real-time weather dashboard fetching data from OpenWeather API with dynamic background updates and error handling" },
        { name: "Image Upload", path: "/image-upload", desc: "Real-time weather dashboard fetching data from OpenWeather API with dynamic background updates and error handling" },
    ];

    return (
        <div className="home-container">
            <h1>⚙️ React Machine Coding Playground</h1>
            <p className="subtitle">
                Explore a collection of React mini-projects built for interview preparation and learning.
            </p>

            <div className="card-grid">
                {projects.map((p) => (
                    <Link to={p.path} key={p.name} className="project-card">
                        <h3>{p.name}</h3>
                        <p>{p.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
