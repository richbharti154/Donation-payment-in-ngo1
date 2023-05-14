import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import style from './App.module.css'
export default function App(src, alt) {
  const [hovered, setHovered] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
 function  handleClick(){
    alert('u can')
  }
  // function handleDonate() {
  //   // Create a payment intent
  //   stripe.paymentIntents.create({
  //       amount: 1000, // amount in cents
  //       currency: 'usd',
  //       description: 'Donation',
  //       payment_method_types: ['card'],
  //   }).then(function(paymentIntent) {
  //       // Display the payment form
  //       stripe.confirmCardPayment(paymentIntent.client_secret, {
  //           payment_method: {
  //             card: cardElement,
  //             billing_details: {
  //                 name: 'John Doe',
  //                 email: 'john.doe@example.com',
  //             },
  //         },
  //     }).then(function(result) {
  //         if (result.error) {
  //             // Handle payment error
  //         } else {
  //             // Payment successful
  //           }
  //         });
  //     });
  // }
  function handleToken(token) {
    // Make a request to your backend to process the donation
    fetch('/charge', {
      method: 'POST',
      body: JSON.stringify(token),
    })
      .then((response) => {
        // Handle successful donation
      })
      .catch((error) => {
        // Handle donation error
      });
  }
  
 
    // ...
  

  function handleToken(token) {
    // Make a request to your backend to process the donation
    fetch('/charge', {
      method: 'POST',
      body: JSON.stringify(token),
    })
      .then((response) => {
        // Handle successful donation
      })
      .catch((error) => {
        // Handle donation error
      });
  }

  return (
    <section className={style.program1}>
      <div className={style.programContainer}>
        <h6 className={style.programme}>Programme</h6>
        <div className={style.boxcontainer}>
          <div className={style.box}>
            <div
              className={`${style.cardImage} ${hovered ? style.zoom : ''}`}
              src={src}
              alt={alt}
            ></div>
            <div className={style.programmetitle}>Education to every child</div>
            <div className={style.donationCount}>
              Donation Goal:<span>$9845</span>
            </div>
            <button className={style.button1}onClick={handleClick}>
              Donate $10
            </button>
            <button className={style.button1} onClick={() => setDonationAmount(20)}>
              Donate $20
            </button>
            
          </div>
          {/* Rest of the boxes */}
        </div>
        <StripeCheckout
              token={handleToken}
              stripeKey="your_stripe_api_key"
              amount={donationAmount * 100}
              currency="USD"
            />
      </div>
    </section>
  );
}





