import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { cartItem, food_list } = useContext(StoreContext);

  const cartData = food_list.filter((item) => cartItem[item._id]);
  const totalPrice = cartData.reduce(
    (total, item) => total + item.price * cartItem[item._id],
    0
  );

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!userDetails.name || !userDetails.address || !userDetails.phone) {
      alert("Please fill all the details!");
      return;
    }
    alert("Order Placed Successfully!");
    // Add order processing logic here, like API calls or state updates
  };

  return (
    <div className="place-order-container">
      <h2>Place Your Order</h2>
      <div className="order-details">
        <div className="user-details">
          <h3>Delivery Information</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{cartItem[item._id]}</td>
                  <td>${item.price}</td>
                  <td>${item.price * cartItem[item._id]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="total-price">Total: ${totalPrice}</h3>
        </div>
      </div>
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default PlaceOrder;
