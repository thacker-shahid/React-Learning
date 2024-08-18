import React, { Component } from 'react'
// import loading from './loading.gif'
import Spinner from 'react-bootstrap/Spinner';
export default class Loading extends Component {
  render() {
    return (
      // <div>
      //   <img src={loading} alt="Gif Image" />
      // </div>

      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    )
  }
}
