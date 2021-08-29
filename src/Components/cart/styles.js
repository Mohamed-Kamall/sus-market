import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title : {
        marginTop:"5%",
        color: "#006C67"
    },
    emptyButton:{
        minWidth:'150px',
        [theme.breakpoints.down('xs')] :{
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')] :{
            marginRight: '20px'
        }
    },
    checkoutButton:{
        minWidth:'150px'
    },
    link:{
        textDecoration:'none',
        marginLeft: '5px',
        color:'#3399CC'
    },
    cartDetails:{
        display :'flex',
        marginTop:'10%',
        width:'100%',
        justifyContent:'space-between',
        marginBottom:'5%'
    }
  }));