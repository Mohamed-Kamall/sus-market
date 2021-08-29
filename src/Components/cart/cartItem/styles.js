import { makeStyles,alpha } from "@material-ui/core";

export default makeStyles((theme) => ({
  root:{
    width:'auto',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      background:'linear-gradient(45deg, #C9FFF3 30%, #FFFFBA 90%)',
    },
  },
  media: {
    height:300
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
