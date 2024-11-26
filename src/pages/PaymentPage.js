import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key');

const CardPaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log('Payment successful:', paymentMethod);
    } else {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay with Card
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const [insurance, setInsurance] = useState('');
  const [coupon, setCoupon] = useState('');
  const [copay, setCopay] = useState(0);

  const calculateCopay = () => {
    const baseAmount = 100; // Example consultation fee
    const copayPercentage = 20; // Example copay percentage
    setCopay((baseAmount * copayPercentage) / 100);
  };

  const applyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      alert('Coupon applied: 10% off!');
    } else {
      alert('Invalid coupon code.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Payment Section</h1>
      
      {/* Insurance Details */}
      <h3>Insurance Details</h3>
      <select value={insurance} onChange={(e) => setInsurance(e.target.value)}>
        <option value="">Select Insurance Provider</option>
        <option value="ProviderA">Provider A</option>
        <option value="ProviderB">Provider B</option>
      </select>
      <button onClick={calculateCopay} style={{ marginLeft: '10px' }}>
        Calculate Copay
      </button>
      <p>Estimated Copay: ${copay}</p>
      
      {/* Coupon Code */}
      <h3>Apply Coupon</h3>
      <input
        type="text"
        placeholder="Enter coupon code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <button onClick={applyCoupon}>Apply</button>
      
      {/* Stripe Payment */}
      <h3>Stripe Payment</h3>
      <Elements stripe={stripePromise}>
        <CardPaymentForm />
      </Elements>

      {/* Additional Payment Methods */}
      <h3>Other Payment Methods</h3>
      <ul>
        <li>Bitcoin</li>
        <li>PayPal</li>
        <li>Skrill</li>
      </ul>
      
      {/* Billing History */}
      <h3>Billing History</h3>
      <p>You have no past payments.</p>
    </div>
  );
};

export default PaymentPage;
