import React, { useState, useEffect } from "react";
import "../styles/common.css";

const MemeGenerator = () => {
    const [meme, setMeme] = useState(null);

    const fetchMeme = async () => {
        try {
            const res = await fetch("https://meme-api.com/gimme");
            const data = await res.json();
            setMeme(data.url);
        } catch {
            alert("Failed to fetch meme 😅");
        }
    };

    useEffect(() => {
        fetchMeme();
    }, []);

    return (
        <div className="common-container">
            <div className="container">
                <header>
                    <h1>Meme Generator</h1>
                </header>

                <button className="button-style" onClick={fetchMeme}>
                    Generate New Meme
                </button>

                {meme && (
                    <div style={{ marginTop: "20px" }}>
                        <img
                            src={meme}
                            alt="meme"
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                                marginTop: "15px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemeGenerator;
