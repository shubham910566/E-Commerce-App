import { useSelector, useDispatch } from "react-redux";
import useFetchData from "../utils/useFetchData";
import ProductItem from "./ProductItem";
import { setSearchTerm } from "../utils/searchSlice"; 
import "./ProductList.css";

function ProductList() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);

    const { data, loading, error } = useFetchData("https://dummyjson.com/products");

    const filteredData = Array.isArray(data)
        ? data.filter((item) =>
              (item.title || "").toLowerCase().includes(search.toLowerCase())
          )
        : [];

    if (loading) return <div className="status-text">Loading...</div>;
    if (error) return <div className="status-text error">Error: {error}</div>;

    return (
        <div className="product-list-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search Products"
                value={search}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            <div className="product-grid">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))
                ) : (
                    <p className="no-results">No products found</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;
