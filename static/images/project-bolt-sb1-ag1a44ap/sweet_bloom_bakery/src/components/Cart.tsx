import React from 'react';
import { X, Plus, Minus, ShoppingBag, Truck, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (itemId: string, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: itemId, quantity: newQuantity }
    });
  };

  const removeItem = (itemId: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: itemId
    });
  };

  const getItemId = (item: any) => {
    return `${item.product.id}-${item.selectedSize}-${item.selectedFlavor}`;
  };

  const subtotal = state.total;
  const deliveryFee = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => dispatch({ type: 'CLOSE_CART' })}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-pink-500" />
              <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
              {state.items.length > 0 && (
                <span className="bg-pink-500 text-white text-sm px-2 py-1 rounded-full">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </div>
            <button
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some delicious treats to get started!</p>
                <button
                  onClick={() => {
                    dispatch({ type: 'CLOSE_CART' });
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => {
                  const itemId = getItemId(item);
                  return (
                    <div key={itemId} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm">
                            {item.product.name}
                          </h4>
                          {item.selectedSize && (
                            <p className="text-xs text-gray-600">Size: {item.selectedSize}</p>
                          )}
                          {item.selectedFlavor && (
                            <p className="text-xs text-gray-600">Flavor: {item.selectedFlavor}</p>
                          )}
                          <p className="text-pink-600 font-bold text-sm">
                            ${item.product.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <button
                            onClick={() => removeItem(itemId)}
                            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(itemId, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="w-8 text-center font-semibold text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(itemId, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              {/* Delivery Options */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Delivery Options</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="pickup" className="text-pink-500" defaultChecked />
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Pickup (Ready in 30 mins)</span>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="delivery" className="text-pink-500" />
                    <div className="flex items-center space-x-2">
                      <Truck className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Delivery (45-60 mins)</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Delivery {subtotal > 50 ? '(Free!)' : ''}
                  </span>
                  <span className="text-gray-800">
                    ${deliveryFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-800">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-pink-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {subtotal < 50 && (
                <div className="bg-sky-50 rounded-lg p-3">
                  <p className="text-sm text-sky-700">
                    Add ${(50 - subtotal).toFixed(2)} more for free delivery!
                  </p>
                </div>
              )}

              {/* Promo Code */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                />
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Proceed to Checkout</span>
                <span className="text-pink-200">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;