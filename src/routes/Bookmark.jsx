import React, { useState } from "react";
import "../styles/common.css";
import "../styles/bookmark.css";

const BookmarkManager = () => {
    const [url, setUrl] = useState("");
    const [bookmarks, setBookmarks] = useState([]);

    const handleAdd = () => {
        if (url.trim()) {
            setBookmarks([...bookmarks, url]);
            setUrl("");
        }
    };

    const handleDelete = (index) => {
        setBookmarks(bookmarks.filter((_, i) => i !== index));
    };

    return (
        <div className="common-container">
            <div className="container">
                <header>
                    <h1>Bookmark Manager</h1>
                </header>

                <input
                    type="text"
                    placeholder="Enter website URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bookmark-input"
                />
                <button className="bookmark-button" onClick={handleAdd}>
                    Add Bookmark
                </button>

                <div style={{ marginTop: "20px", width: "100%" }}>
                    {bookmarks.map((bm, i) => (
                        <div key={i} className="bookmark-item">
                            <a href={bm} target="_blank" rel="noreferrer">
                                {bm}
                            </a>
                            <button
                                className="bookmark-delete"
                                onClick={() => handleDelete(i)}
                            >
                                ✖
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookmarkManager;
