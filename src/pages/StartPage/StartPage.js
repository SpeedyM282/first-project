import React from 'react';
import './style.css';

export default class StartPage extends React.Component {
  render() {
    return (
      <div className='start-page-wrapper' >
        <div>
          <h1 className='start-page-heading' >{this.props.heading}</h1>
          <p className='start-page-description' >{this.props.description}</p>
        </div>
      </div>
    );
  }
}