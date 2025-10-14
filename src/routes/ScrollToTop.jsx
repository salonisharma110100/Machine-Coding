import { useEffect, useState } from "react";
import { GLOBAL } from "../constants/constants";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>{GLOBAL.SCROLL_CONTENT}</h1>

            {visible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: "30px",
                        right: "30px",
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        fontSize: "20px",
                        cursor: "pointer",
                        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                    }}
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
