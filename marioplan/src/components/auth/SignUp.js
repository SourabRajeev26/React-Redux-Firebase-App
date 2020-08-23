import React, { Component } from 'react'

export class SignUp extends Component {
    state={
        firstName:'',
        lastName:'',
        initials:'',
        email:'',
        password:''
    }
  handleSubmit = (e) => {
      e.preventDefault();
        console.log(this.state);
        const intials= this.state.firstName.charAt(0) + this.state.lastName.charAt(0)
        console.log(intials)
  };
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }
  render() {
    return (
      <div className="container">
        <form class="white" onSubmit={this.handleSubmit}>
          <h5 className="black-text">Sign Up</h5>
          <label for="firstName">FirstName</label>
            <div class="input-field col s12">
              <input id="firstName" type="firstName" class="validate" onChange={this.handleChange}/>
              
            </div>
         

            <label for="lastName">LastName</label>
            <div class="input-field col s12">
              <input id="lastName" type="lastName" class="validate" onChange={this.handleChange}/>
            </div>
          

            <label for="email">Email</label>
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" onChange={this.handleChange}/>
            </div>
          

            <label for="password">Password</label>
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" onChange={this.handleChange}/>
            </div>
          
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    );
}
}

export default SignUp
