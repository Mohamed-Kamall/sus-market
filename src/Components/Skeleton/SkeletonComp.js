import React from "react";
import { Grid, Card, CardActions, CardContent } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import myStyles from "./styles";

export default function SkeletonComp() {
  const classes = myStyles();
  return (
    <div className={classes.main_content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7 ].map((item) => (
          <Grid item key={item} xs={12} sm={6} md={4} lg={3}>
            <>
              <Card className={classes.root}>
                <div className={classes.mediaWrap}>
                  <Skeleton variant="rect" height={300} width={440} />
                </div>
                <CardContent>
                  <div className={classes.content}>
                    <Skeleton variant="text" width={100} height={30} />
                    <Skeleton variant="text" width={100} height={30} />
                  </div>
                  <Skeleton variant="text" width={300} height={30} />
                </CardContent>
                <CardActions disableSpacing className={classes.actions}>
                  <Skeleton variant="circle" height={45} width={45} />
                </CardActions>
              </Card>
            </>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
