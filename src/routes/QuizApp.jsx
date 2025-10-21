import { useState } from "react";
import "../styles/quiz.css";
import "../styles/common.css";

const questions = [
    {
        id: 1,
        question: "Which hook is used to manage state in a functional React component?",
        options: ["useEffect", "useState", "useMemo", "useReducer"],
        answer: "useState"
    },
    {
        id: 2,
        question: "Which of the following is used for performance optimization in React?",
        options: ["useLayoutEffect", "useCallback", "useHistory", "useFetch"],
        answer: "useCallback"
    },
    {
        id: 3,
        question: "What does lifting state up mean?",
        options: [
            "Moving state to a parent component",
            "Copying props to state",
            "Using Redux",
            "Adding state in every child"
        ],
        answer: "Moving state to a parent component"
    }
];

const QuizApp = () => {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setShowFeedback(true);
        if (option === questions[current].answer) setScore((prev) => prev + 1);
    };

    const handleNext = () => {
        setShowFeedback(false);
        if (current < questions.length - 1) {
            setCurrent((prev) => prev + 1);
            setSelected(null);
        } else {
            setIsFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrent(0);
        setScore(0);
        setSelected(null);
        setIsFinished(false);
        setShowFeedback(false);
    };

    if (isFinished) {
        return (
            <div className="common-container">
                <div className="container">
                    <h2>🎯 Quiz Completed!</h2>
                    <p>
                        You scored <strong>{score}</strong> out of {questions.length}
                    </p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            </div>
        );
    }

    const q = questions[current];

    return (
        <div className="common-container">
            <div className="container">
                <h3>
                    Question {current + 1} / {questions.length}
                </h3>
                <p className="question">{q.question}</p>

                <div className="options">
                    {q.options.map((opt) => (
                        <button
                            key={opt}
                            className={`option-btn ${selected === opt
                                ? opt === q.answer
                                    ? "correct"
                                    : "wrong"
                                : ""
                                }`}
                            onClick={() => !showFeedback && handleSelect(opt)}
                            disabled={showFeedback}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                {showFeedback && (
                    <div className="feedback">
                        {selected === q.answer ? "✅ Correct!" : "❌ Incorrect!"}
                    </div>
                )}

                <button
                    onClick={handleNext}
                    className="next-btn"
                    disabled={!showFeedback}
                >
                    {current === questions.length - 1 ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default QuizApp;
