
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function AppWrapper({ children }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [total, setTotal] = useState(0);
  const [listProducts, setListProducts] = useState([]);

  return (
    <CartContext.Provider value={{ showCheckout, setShowCheckout, total, setTotal, listProducts ,setListProducts }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}