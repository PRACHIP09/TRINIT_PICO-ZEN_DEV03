import React, { Component } from 'react';
import styled from "@emotion/styled";
import axios from "axios"; 
// import Header from "../../components/Header";
const Container = styled.div`
  margin-top: 150px;
`;
class SubmitForm extends Component {
  state = {
    nitrogen: '',
    phosphorous:'',
    potassium:'',
    ph:'',
    rainfall:'' ,
    state:'',
    city:'',   

  };
/* This is where the magic happens 
*/
handleSubmit = event => {
    event.preventDefault();
    const user = {
      nitrogen: this.state.nitrogen,
      phosphorous: this.state.phosphorous,
      potassium: this.state.potassium,
      ph: this.state.ph,
      rainfall: this.state.rainfall,
      state: this.state.state,
      city: this.state.city,
      
    }
    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
  }
handleChange = event =>{
    this.setState({ name: event.target.value});
  }
render() {
    return (
      <Container>
        {/* <Header/> */}
        <form onSubmit = { this.handleSubmit }>
          <label> Person Name:
            <input type = "text" name = "nitrogen" onChange= {this.handleChange}/>
            </label><label>    <input type = "text" name = "phosphorous" onChange= {this.handleChange}/>
            </label><label> <input type = "text" name = "potassium" onChange= {this.handleChange}/>
            </label><label><input type = "text" name = "ph" onChange= {this.handleChange}/>
          </label>
            <label><input type = "text" name = "rainfall" onChange= {this.handleChange}/>
          </label>
            <label><input type = "text" name = "state" onChange= {this.handleChange}/>
          </label>
            <label><input type = "text" name = "city" onChange= {this.handleChange}/>
          </label>
          <button type = "submit"> Add </button>
        </form>
    </Container>
    );
  }
}
export default SubmitForm;