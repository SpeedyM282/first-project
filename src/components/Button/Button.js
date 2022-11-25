import React from 'react';
import './style.css';

export default class Button extends React.Component {
  render() {
    const style = {
      "backgroundColor": this.props.txt == 'Attack' && '#F75353',
    }

    return (
      <button className='btn' style={style} onClick={() => this.props.handleClick(this.props.txt)}>
        {this.props.txt}
      </button>
    );
  }
}