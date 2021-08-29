import React, { useState ,useEffect} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider ,Button, CssBaseline } from '@material-ui/core'
import myStyle from './styles'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/Commerce';
import { Link ,useHistory} from 'react-router-dom';




export default function Checkout({cart ,order, error,onCaptureCheckout,emptyOrder}) {

    
    const steps = ['Shipping address','Payment details']
    const classes = myStyle()
    const [activeStep, setActiveStep] = useState(0)
    const [tokenId, setTokenId] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const history = useHistory()

     const generateTokenId = async ()=> {
            try {
                const token =  await commerce.checkout.generateToken(cart.id,{type:'cart'})
                setTokenId(token)
            } catch (error) {
                history.push('/')
            }
        }

    const nextStep = ()=>{
        setActiveStep((prev)=>prev+1)
    }
    const backStep = ()=>{
        setActiveStep(prev=>prev-1)
    }

    const next = (data) =>{
        setShippingData(data)
        nextStep()
    }

    useEffect(() => {
        if(cart.total_items!==0)generateTokenId()
    }, [cart])

    const Form =()=>(
        activeStep === 0 ?
        <AddressForm checkoutToken={tokenId} next={next}/> : <PaymentForm onCaptureCheckout={onCaptureCheckout} shippingData={shippingData} token={tokenId} backStep={backStep} nextStep={nextStep}/>
    )
    let Confirmation =()=>    
        order.customer? (
        <>
            <div>
                <Typography variant="h6">Your order is successfully submitted, Thank you {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle2'> Order reference :{order.customer_reference}</Typography>
            </div>
            <br/>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <Button onClick={()=>{emptyOrder(); history.push('/') }} variant='contained' color='primary'> Confirm and back to home </Button>
            </div>
               
        </>
    ):(
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    )

    if(error){
        <>
            <Typography variant='h5'> Error :{error}</Typography>
            <br/>
            <Button component={Link} to='/' variant='outlined' type='button'>Back to home</Button> 
            
            
        </>

    }






    return (
        <>
            <CssBaseline/>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center' color='primary'> CHECKOUT </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {
                            steps.map(step=>(
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel> 
                                </Step>
                            ))
                        }
                    </Stepper>
                    {activeStep===steps.length?<Confirmation/>: tokenId && <Form/>}
                </Paper>
            </main>
        </>
    )
}
