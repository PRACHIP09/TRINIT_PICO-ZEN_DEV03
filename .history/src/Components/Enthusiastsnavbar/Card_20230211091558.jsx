import { Button } from '@mui/material'
import React from 'react'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <div>
            <img src={img} className="hide-feature"/>
            <div className="hide-feature">₹{amount}</div>
            <Button onClick={() => checkoutHandler(amount)}>Donate</Button>
        </div>
    )
}

export default Card