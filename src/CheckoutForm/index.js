import React, { useState } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

function CheckoutForm(props) {
  const [isComplete, setComplete] = useState(false)

  const submit = ev => {
    props.stripe.createToken({ name: 'Name' }).then(result => {
      const { token } = result
      // const token = result.token
      // console.log(token)

      fetch('/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: token.id
      }).then(fetchedResult => {
        if (fetchedResult.ok) {
          console.log('Purchase Complete')
          setComplete(true)
        } else {
          console.log('error')
        }
      })
    })
  }

  if (isComplete) return <h1>Purchase Complete</h1>

  return (
    <div className="checkout">
      <p>Want to purchase?</p>
      <CardElement />
      <button onClick={submit}>Purchase</button>
    </div>
  )
}

export default injectStripe(CheckoutForm)
