import React from 'react'
import './Error.sass'
import ReactSVG from 'react-svg'

const Error = (props) => {
  return (
    <article className='error'>
      <div className='container'>
        <p>{props.error}</p>
        <ReactSVG
         className='exit-icon'
         src='/images/exit_icon.svg'
         onClick={props.clearError} />
       </div>
    </article>
  )
}

export default Error
