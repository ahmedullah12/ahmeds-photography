import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({booking, refetch}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const {_id, price, email, name} = booking;
    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://assignment-11-server-side-wine.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json"
         },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        };


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        };

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log( error);
            setCardError(error.message);
          } else {
            setCardError('');
          };

          setSuccess('');
          setProcessing(true);
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email,
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message);
            return;
          };

          if(paymentIntent.status === "succeeded"){
           

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
            }
            //save payment data to database
            fetch('https://assignment-11-server-side-wine.vercel.app/payment', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    setSuccess("Congrats! your payment completed");
                    setTransactionId(paymentIntent.id);
                    refetch();
                }
            })
          }
          setProcessing(false);

    }
    return (
        <form className='mt-5' onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className='btn btn-sm btn-primary mt-5 rounded' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </form>
    );
};

export default CheckOutForm;