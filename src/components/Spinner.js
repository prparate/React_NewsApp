import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  console.log(loading)
  return (
    <div className='text-center'>
      <img scr='{loading}' alt={loading}></img>
    </div>
  )
}

export default Spinner