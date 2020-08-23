import React, { Component } from "react";

export class SignIn extends Component {
    state={
        email:'',
        password:''
    }
  handleSubmit = (e) => {
      e.preventDefault();
        console.log(this.state);
  };
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }
  render() {
    return (
      <div className="container">
        <form class="col s12" onSubmit={this.handleSubmit}>
          <h5 className="black-text">Sign In</h5>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" onChange={this.handleChange}/>
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" onChange={this.handleChange}/>
              <label for="password">Password</label>
            </div>
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

export default SignIn;
