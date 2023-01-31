import React, { useContext } from 'react'

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import { MedusaContext } from '../context/MedusaContext'
import Form from '../components/Form'

const stripePromise = loadStripe("pk_test_51MQrXyEipZmHjcOJipfULGHayjlhZpigi9kBW2eREz5LwHnC13n5QruPdLKJSodMHTQb3qXYmjTkGTKUKOlTEVcd00V78lFDnN")

const Payment = () => {
    const medusaContext = useContext(MedusaContext)

    const CartId = localStorage.getItem('CartId')
    const clientSecret = medusaContext.paymentSession?.data.client_secret
    console.log(CartId, clientSecret)
    
  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{
          clientSecret,
        }}>
        <Form clientSecret={clientSecret} CartId={CartId} />
      </Elements>
      )}
    </div>
  )
}

export default Payment