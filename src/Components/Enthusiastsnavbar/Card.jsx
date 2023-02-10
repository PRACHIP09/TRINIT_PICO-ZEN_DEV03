import { Button } from '@mui/material'
import React from 'react'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <div>
            <img src={img}/>
            <div>₹{amount}</div>
            <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
        </div>
    )
}

export default Card