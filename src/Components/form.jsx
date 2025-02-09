import React from 'react'

function form() {
  const [value,setValue]=UseState("")
  return (
    <div>
      <h2>color value sample</h2>
      <input  className='border-[1px ]'
      placeholder='type color name'></input>
    </div>
  )
}

export default form
