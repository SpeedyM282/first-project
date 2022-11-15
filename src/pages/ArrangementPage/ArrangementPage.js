import React from 'react';
import Field from '../../components/Field/Field';
import './style.css';

export default class ArrangementPage extends React.Component {
  render() {
    return (
      <div className='arrangement-page-wrapper' >
        <h1 className='arrangement-page-heading' >Player {this.props.player}</h1>
        <Field />
      </div>
    );
  }
}