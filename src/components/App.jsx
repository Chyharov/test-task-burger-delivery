import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner/Spinner';
const Header = lazy(() => import('./Header/Header'));
const DeliveryPage = lazy(() => import('pages/DeliveryPage/DeliveryPage'));
const CartPage = lazy(() => import('pages/CartPage/CartPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Footer = lazy(() => import('./Footer/Footer'));

export const App = () => {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || {});
  const [totalPrice, setTotalPrice] = useState(0);

  const getCartItemCount = useCallback(() => {
    const cartItemCount = cartItems.length;
    localStorage.setItem('cartItemCount', cartItemCount);
    return cartItemCount;
  }, [cartItems]);

  const getCartItemQuantity = useCallback(pizza => cart[pizza.id] || 0, [cart]);

  const updateCart = useCallback((pizza, quantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (quantity <= 0) {
        delete newCart[pizza.id];
      } else {
        newCart[pizza.id] = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const handleAddToCart = useCallback((pizza) => {
    setCartItems((prevCartItems) => [...prevCartItems, pizza]);
    updateCart(pizza, getCartItemQuantity(pizza) + 1);
  }, [getCartItemQuantity, updateCart]);

  const handleRemoveFromCart = useCallback((pizza) => {
    updateCart(pizza, getCartItemQuantity(pizza) - 1);
    setCartItems((prevCartItems) => {
      const index = prevCartItems.findIndex((cartItem) => cartItem.id === pizza.id);
      if (index < 0) return prevCartItems;
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  }, [getCartItemQuantity, updateCart]);

  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.price;
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setTotalPrice(price);
  }, [cartItems]);

  const handleClearCart = useCallback(() => {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartItems');
    setCart({});
    setCartItems([]);
  }, []);

  const removeFromCartItem = useCallback((item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.id] > 0) {
        newCart[item.id] = -1;
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
      return newCart;
    });
  }, []);

  const handleToast = () => {
    toast("🍕 Your pizza is already on its way to you", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  }
  
  return (
    <>
      <Header cartItemCount={getCartItemCount()} />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<DeliveryPage handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} totalPrice={totalPrice} handleClearCart={handleClearCart} removeFromCartItem={removeFromCartItem} handleToast={handleToast}/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};
