 
import React, { useState } from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:py-6 lg:px-8">
    <div className="flex items-center space-x-4 lg:space-x-6">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md lg:w-28 lg:h-28"
      />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <button
        onClick={() => onQuantityChange(item.id, item.quantity - 1)}
        disabled={item.quantity <= 1}
        className={`px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors ${item.quantity <= 1 && 'opacity-50 cursor-not-allowed'}`}
      >
        -
      </button>
      <span className="mx-2 text-gray-800 text-lg">{item.quantity}</span>
      <button
        onClick={() => onQuantityChange(item.id, item.quantity + 1)}
        disabled={item.quantity >= 10}
        className={`px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors ${item.quantity >= 10 && 'opacity-50 cursor-not-allowed'}`}
      >
        +
      </button>
      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
      >
        Remove
      </button>
    </div>
  </div>
);

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 20,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 35,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ]);

  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, Math.min(quantity, 10)) } : item
    ));
  };

  const handleDiscountApply = () => {
    if (discountCode === 'SAVE10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid discount code');
      setDiscountApplied(false);
    }
  };

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = discountApplied ? 0.1 * totalAmount : 0;
  const finalAmount = totalAmount - discount;

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <h2 className="text-2xl font-semibold p-6 border-b border-gray-200 text-gray-800">Shopping Cart</h2>
      <div>
        {items.length === 0 ? (
          <p className="p-6 text-center text-gray-600">Your cart is empty</p>
        ) : (
          items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))
        )}
      </div>
      <div className="p-6 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Discount Code"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-auto"
          />
          <button
            onClick={handleDiscountApply}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors w-full lg:w-auto"
          >
            Apply Discount
          </button>
        </div>
        <div className="text-lg font-bold text-gray-800 mt-4 lg:mt-0">
          <p>Total: <span className="text-2xl">${finalAmount.toFixed(2)}</span></p>
          {discountApplied && (
            <p className="text-green-600">Discount Applied: -${discount.toFixed(2)}</p>
          )}
        </div>
      </div>
      <div className="p-6 border-t border-gray-200">
        <button className="w-full lg:w-1/3 mx-auto px-6 py-3 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
