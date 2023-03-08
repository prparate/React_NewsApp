import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    console.log(loading)
    return (
      <div className='text-center'>
        <img scr='{loading}' alt={loading}></img>
      </div>
    )
  }
}
