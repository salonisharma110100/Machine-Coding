import { useState, useEffect } from "react";
import "../styles/todolist.css";
import "../styles/common.css";

const ToDoList = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const handleText = (e) => {
        setText(e.target.value);
    };

    const handleAddTask = () => {
        if (!text.trim()) return;

        const newTask = {
            id: Date.now(),
            task: text.trim(),
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setText("");
    };

    const handleRemove = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleToggle = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="container">
            <header>
                <h1>To-Do List</h1>
            </header>

            <section className="input-section">
                <input
                    className="todolist-input"
                    type="text"
                    value={text}
                    placeholder="Add Task"
                    onChange={handleText}
                />
                <button
                    className="primary-button"
                    onClick={handleAddTask}
                    disabled={!text.trim()}
                >
                    Add
                </button>
            </section>

            <section className="task-list">
                {tasks.length === 0 ? (
                    <p className="no-task">No tasks yet. Add one!</p>
                ) : (
                    tasks.map((item) => (
                        <div key={item.id} className="todolist">
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleToggle(item.id)}
                            />
                            <div
                                className={`item-text ${item.completed ? "completed" : ""
                                    }`}
                            >
                                {item.task}
                            </div>
                            <button
                                className="delete-button"
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
};

export default ToDoList;
