import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	const handleAddToCart = async (productId, quantity) => {
		const updatedCart = await commerce.cart.add(productId, quantity);
		setCart(updatedCart);
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		const updatedCart = await commerce.cart.update(productId, { quantity });

		setCart(updatedCart);
	};

	const handleRemoveFromCart = async (productId) => {
		const updatedCart = await commerce.cart.remove(productId);

		setCart(updatedCart);
	};

	const handleEmptyCart = async () => {
		const updatedCart = await commerce.cart.empty();

		setCart(updatedCart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);

	return (
		<Router>
			<div>
				<Navbar totalItems={cart.total_items} />
				<Routes>
					<Route path='/' element={<Products products={products} onAddToCart={handleAddToCart} />} />
					<Route path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} />
					<Route path='/checkout' element={<Checkout />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
