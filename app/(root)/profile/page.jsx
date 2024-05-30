import React from 'react'
import ManageBookedEvents from './_components/manage-booked-events'

function ProfiePage() {
  return (
    <div>
      <h1 className='text-6xl flex justify-center py-10'>My upcoming events</h1>
      <ManageBookedEvents />
    </div>
  )
}

export default ProfiePage