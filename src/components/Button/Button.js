import React from 'react';
import './style.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className='btn' onClick={this.props.handleClick}>
        {this.props.txt}
      </button>
    );
  }
}