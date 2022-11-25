import React from 'react';
import './style.css';

export default class Square extends React.Component {
  render() {
    const map = {
      [this.props.isChecked?.includes(this.props.id)]: '#4D5B9E',
      [this.props.isVessel?.includes(this.props.id)]: '#F75353',
      [this.props.isAttacked?.includes(this.props.id)]: '#EED202',
      default: 'white'
    }
    const style = { "backgroundColor": map['true'] || map['default'] }
    return (
      <button onClick={() => this.props.handleClick(this.props.id)} className='square-wrapper' style={style} ></button >
    );
  }
}