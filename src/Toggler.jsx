import React from 'react';
import ReactDOM from 'react-dom';

class Toggler extends React.Component {
  handelClick(e) {
    if (e.target.textContent === 'Off') {
      e.target.textContent = 'On';
    } else {
      e.target.textContent = 'Off';
    }
  }

  render() {
    return (
      <button className="toggler" onClick={this.handelClick}>
        Off
      </button>
    );
  }
}

export default Toggler;
