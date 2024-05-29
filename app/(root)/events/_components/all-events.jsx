'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FilterEvents } from "./filter-events"

export const AllEvents = () => {

    const [events, setEvents] = useState([])
    const [filterDate, setFilterDate] = useState('')
    const [filterLocation, setFilterLocation] = useState('')

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/events')
                const data = await response.json()
                setEvents(data)
            } catch (error) {
                console.error('Error', error)
            }
        }

        fetchEvents()
    }, [])

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date)
        const currentDate = new Date()
        const isAfterCurrentDate = eventDate >= currentDate
        const matchesDateFilter = !filterDate || event.date === filterDate
        const matchesLocationFilter = !filterLocation || event.location === filterLocation
        return isAfterCurrentDate && matchesDateFilter && matchesLocationFilter
    })

    return (
    <>
     <div>
        <FilterEvents setFilterDate={setFilterDate} setFilterLocation={setFilterLocation} events={events} />
    </div>
    <div className="flex flex-wrap gap-6 justify-center">
        {filteredEvents.map((event) => {
    return (
        <div key={event._id} className="card w-72 border rounded hover:bg-slate-50/5">
         <Link href={'/event/'+event._id}>
            <div className="h-64 w-72">
                 {event.image ? (
                     <Image 
                         src={event.image}
                         width={288}
                         height={256}
                         alt={event.title}
                         className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="">
                     No Image
                    </div>
                 )}
        </div>
            <div className="">
                     <h2 className="text-2xl font-semibold">{event.title}</h2>
                     <p>{event.location}</p>
                     <p>{event.date}</p>
                     <p>Price: ${event.price}</p>
                     <p>Seats left: {event.seats}</p>
                     <p>View details and book! </p>
                    </div>
        </Link>
        </div>
        )
     })}

    </div>
    </>
    )
}