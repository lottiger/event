'use client'


import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { BookEventButton } from "./book-event"
import { useAuth } from "@clerk/nextjs"

export const EventDetails = () => {
  const [event, setEvent] = useState(null)
  const { id } = useParams()
  const userId = useAuth

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/events/${id}`)
        const data = await response.json()
        setEvent(data)
      } catch (error) {
        console.error('Error', error)
      }
    }

    fetchEvent()
  }, [])

  if (!event) {
    return <div>Loading...</div>
  }

  return (
    <div>
       <img src={event.image} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.date}</p>
      <p>Price: ${event.price}</p>
      <p>seats left:{event.seats}</p>
      <BookEventButton eventId={id} userId={userId} />
    </div>
  )
}