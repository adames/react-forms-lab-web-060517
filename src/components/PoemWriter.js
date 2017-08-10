import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      style: {color: 'red'}
    };
  }
  poemHandler = (event) => {
    this.setState({
      value: event.target.value,
      style: {color: 'red'}
    });
    let poem = event.target.value
    if (poem.split(' ').length > 10){
      let lines = poem.split('\n')
      let line1 = lines[0].trim()
      let line2 = lines[1].trim()
      let line3 = lines[2].trim()
      if (line1.split(' ').length === 5 &&
          line2.split(' ').length === 3 &&
          line3.split(' ').length === 5){
            this.setState({style: {display: 'none'}})
      }
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.poemHandler}
        />
        <div
          id="poem-validation-error"
          style={this.state.style}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
