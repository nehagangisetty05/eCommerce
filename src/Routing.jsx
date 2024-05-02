import React from 'react'
import Layout from './Layout'
import Products from './Products'
import Cart from './Cart'
import Order from './Order'
import Checkout from './CheckOut'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

let r = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Products/>
            },
            {
                path : "/cart/:id",
                element : <Cart/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/order/:id",
                element : <Order/>
            },
            {
                path : '/order',
                element : <Order/>
            },
            {
                path : "/checkout",
                element : <Checkout/>
            }
        ]
    }
])

const Routing = () => {
  return (
    <div>
        <RouterProvider router={r}></RouterProvider>
    </div>
  )
}

export default Routing
