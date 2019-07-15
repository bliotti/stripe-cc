import React from 'react'
import logo from './logo.svg'
// import './App.css'
import CheckoutForm from './CheckoutForm'
import { Elements, StripeProvider } from 'react-stripe-elements'

function App() {
  return (
    <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
      <div className="example">
        <h1>React Stripe Example</h1>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
  )
}

export default App
