import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";


// Lazy load components for performance
const ProductList = lazy(() => import("./Components/ProductList"));
const ProductDetail = lazy(() => import("./Components/ProductDetails"));
const Cart = lazy(() => import("./Components/Cart"));
const NotFound = lazy(() => import("./Components/NotFound"));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;