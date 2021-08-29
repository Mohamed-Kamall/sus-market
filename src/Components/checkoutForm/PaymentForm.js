import React from "react";

import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export default function PaymentForm({
  shippingData,
  token,
  backStep,
  onCaptureCheckout,
  nextStep,
}) {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        items_list: token.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address1,
          town_city: shippingData.city,
          postal_zip_code: shippingData.zip,
          country_state: shippingData.shippingSubdivision,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      onCaptureCheckout(token.id, orderData);
      nextStep();
    }
  };

  return (
    <>
      <Review token={token} />
      <Typography variant="h5" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <div
                style={{
                  marginBottom: "20px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#b7ebee",
                  width: "100%",
                }}
              >
                <Typography variant="subtitle1" gutterBottom>
                  Since this is for test only keep pressing 42424242... untill
                  you fill the card element field!
                </Typography>
              </div>
              <CardElement />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button onClick={backStep} variant="outlined">
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  {" "}
                  Pay {token.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
}
