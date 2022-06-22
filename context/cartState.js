import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function AppWrapper({ children }) {
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <CartContext.Provider value={{ showCheckout, setShowCheckout }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}