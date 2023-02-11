import { Button } from '@mui/material'
import React from 'react'

const Card1 = ({ amount, img, checkoutHandler }) => {
    return (
        <div>
            <img src={img} className="hide-feature"/>
            <div className="hide-feature">₹{amount}</div>
            <Button onClick={() => checkoutHandler(amount)} style={{ fontSize: "1.1rem", backgroundColor: "green", padding: "1vh 5vh", color: "white" }}>Donate</Button>
        </div>
    )
}

export default Card1