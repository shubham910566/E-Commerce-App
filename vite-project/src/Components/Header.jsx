import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className="header">
            <h1 className="header-title">🛍️ Welcome to ShoppyGlobe</h1>
            <ul className="header-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    );
}

export default Header;
