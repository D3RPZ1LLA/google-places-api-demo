import React from 'react'
import './Display.sass'

const Display = (props) => {
  const displayClass = props.parsedFormat ? 'data-display parsed' : 'data-display'
  return (
    <div className={displayClass}>
      <div className='data-display-container'>
        <article className='place-data'>
          <h2>PARSED</h2>
          <pre>
            <code>
              {JSON.stringify(props.place.parsed, null, 4)}
            </code>
          </pre>
        </article>
        <article className='place-data'>
          <h2>RAW</h2>
          <pre>
            <code>
              {JSON.stringify(props.place.raw['result']['address_components'], null, 4)}
            </code>
          </pre>
        </article>
      </div>
    </div>
  )
}

export default Display
