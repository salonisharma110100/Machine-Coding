import { useEffect, useState } from "react";
import "../styles/products.css";

const ProductFilter = () => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            setFiltered(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        let temp = [...products];

        if (search.trim()) {
            temp = temp.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category !== "All") {
            temp = temp.filter((p) => p.category === category);
        }

        if (sort === "asc") {
            temp.sort((a, b) => a.price - b.price);
        } else if (sort === "desc") {
            temp.sort((a, b) => b.price - a.price);
        }

        setFiltered(temp);
    }, [search, category, sort, products]);

    const uniqueCategories = [
        "All",
        ...new Set(products.map((p) => p.category))
    ];

    return (
        <div className="product-filter-container">
            <div className="filter-container">
                <h2>🛒 Product Filter</h2>

                <div className="filter-controls">
                    <input
                        type="text"
                        placeholder="Search product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="filter-input"
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="filter-select"
                    >
                        {uniqueCategories.map((cat) => (
                            <option key={cat}>{cat}</option>
                        ))}
                    </select>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="filter-select"
                    >
                        <option value="default">Sort By</option>
                        <option value="asc">Price: Low → High</option>
                        <option value="desc">Price: High → Low</option>
                    </select>
                </div>

                <div className="product-grid">
                    {filtered.length ? (
                        filtered.map((p) => (
                            <div key={p.id} className="product-card">
                                <img src={p.image} alt={p.title} />
                                <h4>{p.title.slice(0, 40)}...</h4>
                                <p>${p.price.toFixed(2)}</p>
                                <small>{p.category}</small>
                            </div>
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
