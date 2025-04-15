ShoppyGlobe E-commerce Application
Overview
ShoppyGlobe is a basic e-commerce application built with React. The application allows users to browse products, view product details, add items to a shopping cart, and manage their cart with Redux.

Features
Component Structure
- App: Main component that orchestrates the application.
- Header: Displays a navigation menu and shopping cart icon.
- ProductList: Shows a list of available products fetched from an API.
- ProductItem: Represents a single product with an “Add to Cart” button.
- ProductDetail: Displays detailed information about a selected product.
- Cart: Manages and displays items in the cart.
- CartItem: Represents an individual item in the cart with options to modify or remove it.
- NotFound: Renders a 404 page for unrecognized routes.

Functionalities
- Data Fetching:- Fetch product data using the useEffect hook from https://dummyjson.com/products.
- Create a custom hook for fetching the product list.

- State Management:- Integrate Redux for managing the state of cart items.
- Implement actions, reducers, and selectors for state management.

- Routing:- Implement routing with React Router for Home, Product Detail, Cart, and Checkout pages.
- Utilize route parameters for product details.

- Search Feature:- Enable search functionality to filter products in the ProductList.

- Event Handling:- Add items to the cart from the ProductItem component.
- Remove items from the cart in the CartItem component using Redux.

- Performance Optimization:- Use React.lazy and Suspense for code splitting and lazy loading of components.

- Styling:- Apply responsive CSS to ensure the application works well on different screen sizes.



Installation
- Clone the repository:git clone link of repository
cd ShoppyGlobe

- Install dependencies:npm install

- Start the development server:npm start

- Open the application in your browser at: http://localhost:3000.


APIs Used
- Products API: https://dummyjson.com/products (Provides product data for the application).


Technologies
- Frontend: React, Redux, React Router
- Styling: CSS
- Performance: React.lazy and Suspense



