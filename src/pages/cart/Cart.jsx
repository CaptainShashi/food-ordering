import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate(); // Hook for navigation

  const calculateTotal = (id, quantity, price) => quantity * price;

  const cartData = food_list.filter((item) => cartItem[item._id]);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartData.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <div className="cart-quantity">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <span>{cartItem[item._id]}</span>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                </td>
                <td>${calculateTotal(item._id, cartItem[item._id], item.price)}</td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item._id, true)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cartData.length > 0 && (
        <div className="cart-summary">
          <h2>
            Total: $
            {cartData.reduce(
              (acc, item) =>
                acc + calculateTotal(item._id, cartItem[item._id], item.price),
              0
            )}
          </h2>
          <button
            onClick={() => navigate("/order")} // Navigate to PlaceOrder page
            className="checkout-button"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
