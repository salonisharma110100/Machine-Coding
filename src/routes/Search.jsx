import { useState, useEffect } from "react";
import "../styles/search.css";
import "../styles/common.css";

const mockData = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Watermelon",
    "Strawberry",
    "Blueberry",
    "Papaya",
];

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filtered, setFiltered] = useState(mockData);

    useEffect(() => {
        const results = mockData.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFiltered(results);
    }, [searchTerm]);

    return (
        <div className="common-container">
            <div className="search-card">
                <header>
                    <h1>Search Filter</h1>
                </header>

                <section className="search-input-section">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </section>

                <section className="results-section">
                    {filtered.length ? (
                        filtered.map((item, idx) => (
                            <div key={idx} className="result-item">
                                {item}
                            </div>
                        ))
                    ) : (
                        <div className="result-item">No results found</div>
                    )}
                </section>

                <footer className="results-footer">
                    <p>Total Results: {filtered.length}</p>
                </footer>
            </div>
        </div>
    );
};

export default Search;
