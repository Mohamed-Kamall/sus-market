import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { AddShoppingCart } from "@material-ui/icons";
import myStyles from "./styles";

export default function Product({ product, addToCartHandler }) {
  const [open, setOpen] = useState(false);
  const classes = myStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.mediaWrap}>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
        </div>
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h6" gutterBottom style={{color: '#7c4683',fontWeight:700}}>
              {product.name}
            </Typography>
            <Typography variant="h6" style={{color:'#342536' }}>
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body1"
            style={{color:'#342536' }}
          />
        </CardContent>
        <CardActions disableSpacing className={classes.actions}>
          <IconButton
            aria-label="add to cart"
            onClick={async() => {
              await addToCartHandler(product.id, 1);
              setOpen(true);
            }}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="success">
            item ({product.name}) is added to the cart
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
