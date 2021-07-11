import React from 'react';
import ReactDOM from 'react-dom';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      button: false,
    };
  }
  
  handleClick = () => {
    this.setState({
      button: !this.state.button,
    });
  };

  render() {
    return (
      <button className="toggler" onClick={() => this.handleClick()}>
        {this.state.button ? 'On' : 'Off'}
      </button>
    );
  }
}


export default Toggler;

// handelClick(e) {
//   if (e.target.textContent === 'Off') {
//     e.target.textContent = 'On';
//   } else {
//     e.target.textContent = 'Off';
//   }
// }
