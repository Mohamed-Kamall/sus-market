import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../product/Product";

import mystyles from "./styles";

export default function Products({ products, addToCartHandler }) {
  const classes = mystyles();
  return (
    <div className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justifyContent="center" spacing={3}>
        {products.map((prod) => (
          <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={prod} addToCartHandler={addToCartHandler} />
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
}
