import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: null,
      password: null
    };
  }

  handleInputChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
      })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.state.username && this.state.password ? this.props.handleLogin(this.state) : null;
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} value={this.state.password}/>
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
