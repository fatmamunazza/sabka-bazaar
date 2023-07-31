import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartPopup from "../../components/CartPopup";
import Home from "../home/Home";
import Product from "../product/Product";
import UserAccess from "../userAccess/UserAccess";
import { requestCart } from "../../redux/slice/cartSlice";
import { logout, login } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveProduct } from "../../services/cartApi";
import { createUser, loginApi } from "../../services/authApi";

const MainScreen = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("allProduct");
  const dispatch = useDispatch();

  const cartItemsFromStore = useSelector((state) => state.cart.data);
  const [cartItems, setCartItems] = useState([]);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?.userId) {
      console.log("munazzacART", user?.userId);
      dispatch(requestCart(user?.userId));
    } else {
      // User is not logged in, set the cart items to an empty array
      setCartItems([]);
    }
  }, [dispatch, user]);

  useEffect(() => {
    setCartItems(cartItemsFromStore);
  }, [cartItemsFromStore]);

  const handleIncrement = (product) => {
    console.log("munazza", product._id, "fatma", user?.userId);
    if (user?.userId) {
      addOrRemoveProduct({
        userId: user?.userId,
        productId: product?._id,
        action: "add",
      }).then(() => {
        dispatch(requestCart(user?.userId));
      });
      setCartItems(cartItemsFromStore);
    } else {
      const existingItem = cartItems.find((item) => item._id === product._id);

      if (existingItem) {
        const updatedCartItems = cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedCartItems);
      } else {
        const productToAdd = {
          ...product,
          quantity: 1,
        };

        setCartItems([...cartItems, productToAdd]);
      }
    }
  };

  const handleDecrement = (product) => {
    if (user?.userId) {
      addOrRemoveProduct({
        userId: user?.userId,
        productId: product._id,
        action: "remove",
      }).then(() => {
        // After updating the cart, fetch the latest cart data from the API
        dispatch(requestCart(user?.userId));
      });
      setCartItems(cartItemsFromStore);
    } else {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          const newQuantity = Math.max(item.quantity - 1, 0);
          if (newQuantity === 0) {
            return null;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      const filteredCartItems = updatedCartItems.filter(
        (item) => item !== null
      );

      setCartItems(filteredCartItems);
    }
  };

  const handleSignup = async (userData) => {
    const response = await createUser(userData);
    console.log("munazza", response?.status);
    if (response?.status === 200) {
      dispatch(login(response));
      alert("created user successfully");
      setCurrentPage("home");
    }
  };

  const handleLogin = async (userData) => {
    const response = await loginApi(userData);
    if (response?.status === 200) {
      dispatch(login(response));
      alert("login successfully");
      setCurrentPage("home");
    }
  };

  const handleLogout = async (userData) => {
    dispatch(logout());
  };

  // Function to handle the click event on the "Home" button
  const handleHomeClick = () => {
    setCurrentPage("home");
  };

  // Function to handle the click event on the "Product" button
  const handleProductClick = () => {
    setCurrentPage("product");
  };

  // Function to handle the click event on the "Sign In" button
  const handleSignInClick = () => {
    setCurrentPage("signin");
  };

  // Function to handle the click event on the "Register" button
  const handleRegisterClick = () => {
    setCurrentPage("signup");
  };
  const handleOnClickOfCart = () => {
    setCartOpen(true);
  };

  return (
    <div>
      <Header
        onHomeClick={handleHomeClick}
        onProductClick={handleProductClick}
        onSignInClick={handleSignInClick}
        onRegisterClick={handleRegisterClick}
        onLogOutClick={handleLogout}
        onCartClick={handleOnClickOfCart}
        cartItems={cartItems}
        isAuthenticated={isAuthenticated}
        userName={user?.userName}
        setSelectedCategory={setSelectedCategory}
      />

      {currentPage === "home" && (
        <Home
          onCategoryClick={handleProductClick}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {currentPage === "product" && (
        <Product
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleIncrement={handleIncrement}
        />
      )}

      {currentPage === "signin" && (
        <UserAccess
          handleAuth={handleLogin}
          currentPage={currentPage}
          title={"Login"}
          desc={"Get access to your Orders. Wishlist and Recommendations"}
        />
      )}
      {currentPage === "signup" && (
        <UserAccess
          handleAuth={handleSignup}
          currentPage={currentPage}
          title={"SignUp"}
          desc={"We do not share your personal details"}
        />
      )}
      {cartOpen && (
        <CartPopup
          // cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          cartItems={cartItems}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          // onRemoveFromCart={handleRemoveFromCart}
          // onClearCart={handleClearCart}
        />
      )}
      <Footer />
    </div>
  );
};

export default MainScreen;
