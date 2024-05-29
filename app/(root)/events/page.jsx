import React from 'react'
import { AllEvents } from './_components/all-events'

function EventsPage() {
  return (
    <div className=''>
      <h1 className='text-6xl flex justify-center py-10'>All the top events</h1>
    <AllEvents />
    </div>
  )
}

export default EventsPage