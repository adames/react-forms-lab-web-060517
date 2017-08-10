import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    // THE BELOW IS BREAKING FOR SOME REASON - even though it would fix the test.
    // if (this.state.username && this.state.password) {
    //   this.onSubmit()
    // }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.onSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
