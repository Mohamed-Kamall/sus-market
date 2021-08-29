import { Container, Typography, Button, Grid ,Snackbar } from "@material-ui/core";
import {Alert} from '@material-ui/lab'
import React,{useState} from "react";
import CartItem from "./cartItem/CartItem";
import myStyle from "./styles";
import { Link } from "react-router-dom";


export default function Cart({ cart, removeFromCart, updateCart, emptyCart }) {
  const classes = myStyle();
  const [open, setOpen] = useState(false)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      
      YOUR CART IS EMPTY
      <Link className={classes.link} to="/">
        START ADDING ITEMS
      </Link>
      !
    </Typography>
  );

  const MyCart = () => (
    <>
      <Grid container spacing={2}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <CartItem
              item={item}
              updateCart={updateCart}
              removeFromCart={removeFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant="h4">
          
          Subtotal : {cart.subtotal.formatted_with_symbol}{" "}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            type="button"
            size="large"
            variant="contained"
            color="secondary"
            onClick={async()=>{ await emptyCart(); setOpen(true) }}
          >
            
            EMPTY CART
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            type="button"
            size="large"
            variant="contained"
            color="primary"
          >
            
            CHECKOUT
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h2" gutterBottom className={classes.title}>
        YOUR SHOPPING CART
      </Typography>
      {!cart.total_items ? <EmptyCart /> : <MyCart />}
      <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical:"bottom",horizontal:"center"}}>
            <Alert onClose={handleClose} severity='info'>
              Cart Emptied
            </Alert>
        </Snackbar>
    </div>
    </Container>
  );
}
