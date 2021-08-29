import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main_content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  Main_root: {
    flexGrow: 1,
  },
  root: {
    width: "auto",
    backgroundColor: alpha(theme.palette.common.white, 0.15),

    "&:hover": {
      background: "linear-gradient(45deg, #C9FFF3 30%, #FFFFBA 90%)",
    },
  },
  mediaWrap: {
    display: "flex",
    justifyContent: "center",
    transition: "all .2s ease-in-out",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  media: {
    width: "95%",
    height: "auto",
    objectFit: "contain",
    paddingTop: "56.25%",
    borderRadius: "8px",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
