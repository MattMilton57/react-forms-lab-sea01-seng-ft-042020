import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })    
  }

  submitHandler = (e) => {
    e.preventDefault()
    // var username = this.state.username
    if (this.state.username.length > 0 && this.state.password.length > 0){ this.props.handleLogin((this.state.username), (this.state.password))
    }
  }

  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              value={this.state.username}
              onChange={e => this.changeHandler(e)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password"
              value={this.state.password}
              onChange={e => this.changeHandler(e)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
