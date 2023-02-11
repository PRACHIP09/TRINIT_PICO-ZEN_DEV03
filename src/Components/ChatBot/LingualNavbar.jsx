import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const LingualNavbar = () => {
  const navigate = useNavigate();
  const numbers = [
    { val: 'en', text: "English" }, { val: 'hi', text: "हिन्दी" }, { val: 'bn', text: "বাংলা" },
    { val: 'gu', text: "ગુજરાતી" }, { val: 'mr', text: "मराठी" },
    { val: 'de', text: "German" }
  ]
  const [lang, setLang] = useState('en');
  const handlechange = (e) => {
    setLang(e.target.value);
    localStorage.setItem("language", e.target.value);
    navigate("/?lng=" + e.target.value)
    const href = "http://localhost:3000/?lng=" + e.target.value
    window.location.href = href;
  }
  console.log(localStorage.getItem("language"))
  return (
    <div>
      <Grid container spacing={2} style={{ marginBottom: "5vh" }}>
        {numbers.map((item) => {
          return (
            <Grid item style={{ cursor: "pointer" }} xs={2} sx={{ backgroundColor: "transparent", marginTop: "5px", textAlign: "center" }}>
              <Button sx={{
                color: "black", fontSize: "1.1rem", marginTop: "-10px", marginLeft: "-5px",
                "&:hover": {
                  background: "#f5f5f5"
                }
              }} onClick={handlechange} value={item.val}>
                {item.text}
              </Button>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default LingualNavbar