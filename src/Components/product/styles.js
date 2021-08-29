import { makeStyles, alpha } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width:'auto',
    backgroundColor: '#f4fbff',
    
    "&:hover": {
      background:'linear-gradient(45deg, #c3b0f2 30%, #72ddbf 90%)',
    },
  },
  mediaWrap: {
    display: "flex",
    justifyContent: "center",
    transition: 'all .2s ease-in-out',
    
    "&:hover":{
      transform: 'scale(1.1)',
  }},
  media: {
    width: '95%',
    height:'auto',
    objectFit:'contain',
    paddingTop: "56.25%",
    borderRadius:"8px",
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
