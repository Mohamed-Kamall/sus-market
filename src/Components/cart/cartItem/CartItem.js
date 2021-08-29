import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import myStyle from "./styles";

export default function CartItem({ item, updateCart, removeFromCart }) {
  const classes = myStyle();
  

  return (
    <Card className={classes.root}>
      <CardMedia
        image={item.media.source}
        title={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6">{item.price.raw*item.quantity} $</Typography> 
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => updateCart(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => updateCart(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
