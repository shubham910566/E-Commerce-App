import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import "./ProductItem.css"; // Import the CSS file

function ProductItem({ item }) {
    const dispatch = useDispatch();

    if (!item || !item.id) {
        return null;
    }

    function handleAddToCart() {
        try {
            dispatch(addToCart({ ...item, quantity: 1 }));
        } catch (err) {
            console.error("Add to Cart Error:", err);
        }
    }

    return (
        <div className="product-item">
            <Link to={`/product/${item.id}`} className="product-link">
                <img
                    className="product-thumbnail"
                    src={item.thumbnail || "placeholder.jpg"}
                    alt={`Image of ${item.title || "Product"}`}
                />
                <h3 className="product-title">{item.title || "Untitled Product"}</h3>
                <p className="product-price">${item.price || 0}</p>
            </Link>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductItem;
