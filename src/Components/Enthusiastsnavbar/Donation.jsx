import React from 'react'
import Card from './Card'
import axios from "axios";


const Donation = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Shubham Shah",
                email: "shahshubham024@gmail.com",
                contact: "7045707681"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <div>
            <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
            <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
        </div>

    )
}

export default Donation