import { makeStyles,alpha } from "@material-ui/core";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: 'center',
    textDecoration: "none",
    fontSize:20,
    fontWeight:700,
    color: '#7c4683'
  },
  image: {
    marginRight: "10px",
    
  },
  grow: {
    flexGrow: 1,
  },
  
  empt:{
    backgroundColor:'#f8e6fb',
    borderRadius: 50,
  },
  button:{
    color:'#404F5C',
    borderRadius: 50,
    background:'linear-gradient(45deg, #c3b0f2 30%, #72ddbf 90%)',
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
}));
