import React from 'react';
import ReactDOM from 'react-dom';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      button: false,
    };
  }

  handelClick = () => {
    this.setState({
      button: !this.state.button,
    });
  }
  // onButton() {
  //   if (this.state.button === 'Off') {
  //     this.state.button = 'On';
  //   } else {
  //     this.state.button = 'Off';
  //   }
  // }

  render() {
    return (
      <button className="toggler" onClick={() => this.handelClick}>
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
