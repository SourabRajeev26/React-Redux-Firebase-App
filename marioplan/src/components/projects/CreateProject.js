import React, { Component } from "react";

export class CreateProject extends Component {
    state={
        title:'',
        content:''
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
          <h5 className="black-text">CreateProject</h5>
          
          <label for="title">Title</label>
            <div class="input-field">
              <input id="title" type="title" class="validate" onChange={this.handleChange}/>
              
            </div>
          
            <div class="input-field col s12">
            <label for="content">Content</label>
            <textarea id="content" type="content" class="validate" class="materialize-textarea" data-length="120" onChange={this.handleChange}></textarea>
            
            
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

export default CreateProject;
