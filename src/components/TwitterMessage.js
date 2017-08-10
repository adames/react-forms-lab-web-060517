import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleTweet = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleTweet}
        />
        <p>characters remaining: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
