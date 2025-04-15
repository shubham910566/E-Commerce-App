import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";
import "./CartItem.css"; 

function CartItem({ item }) {
    const dispatch = useDispatch();

    if (!item || !item.id) {
        console.warn("Invalid item in CartItem:", item);
        return null;
    }

    return (
        <div className="cart-item">
            <img
                className="cart-item-img"
                src={item.thumbnail || "placeholder.jpg"}
                alt={item.title || "Product"}
            />
            <div className="cart-item-details">
                <h4 className="cart-item-title">{item.title || "Untitled Product"}</h4>
                <p className="cart-item-price">Price: ${item.price || 0}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity || 1}</p>
                <button
                    className="cart-item-remove"
                    onClick={() => dispatch(removeFromCart(item.id))}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;
