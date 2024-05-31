import React from 'react'
import MyEvents from './_components/my-events'

function ProfiePage() {
  return (
    <div>
      <h1 className='text-6xl flex justify-center py-10'>My upcoming events</h1>
      <MyEvents />
    </div>
  )
}

export default ProfiePage