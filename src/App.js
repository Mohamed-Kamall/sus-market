import React, { useState, useEffect } from "react";
import { Cart, Checkout, Navbar, Products, SkeletonComp } from "./Components";
import { commerce } from "./lib/Commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('')
  

  
  const emptyOrder =()=>{
    setOrder({})
  }

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data) ;
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    
  };

  const addToCartHandler = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const removeFromCart = async (prductId) => {
    const { cart } = await commerce.cart.remove(prductId);
    setCart(cart);
  };
  const updateCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const EmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async ()=>{
    const newCart = await commerce.cart.refresh()
    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutToken_id,newOrder) =>{
    try {
      const finalOrder = await commerce.checkout.capture(checkoutToken_id,newOrder)
      setOrder(finalOrder)
      refreshCart()
      
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }
  
  useEffect(() => {
    fetchProducts();
    fetchCart();
    
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalUniqueItems={cart.total_unique_items} />
        <Switch>
          <Route exact path="/">
            {products?<Products products={products} addToCartHandler={addToCartHandler} />:<SkeletonComp/>}
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateCart={updateCart}
              emptyCart={EmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout 
              order={order}
              error={errorMessage}
              onCaptureCheckout={handleCaptureCheckout}
              cart={cart}
              emptyOrder={emptyOrder}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
