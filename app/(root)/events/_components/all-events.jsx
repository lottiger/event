'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FilterEvents } from "./filter-events"
import { Loader } from "lucide-react"

export const AllEvents = () => {
    const [events, setEvents] = useState([])
    const [filterDate, setFilterDate] = useState('')
    const [filterLocation, setFilterLocation] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/events')
                const data = await response.json()
                setEvents(data)
            } catch (error) {
                console.error('Error', error)
            } finally {
                setLoading(false)
            }
        }

        fetchEvents()
    }, [])

    const handleFilterDate = (date) => {
        console.log('Setting filter date to', date)
        setFilterDate(date)
    }

    const handleFilterLocation = (location) => {
        console.log('Setting filter location to', location)
        setFilterLocation(location)
    }

    const filteredEvents = events.filter(event => {
        const currentDate = new Date().toISOString().split('T')[0]
        const isAfterCurrentDate = event.date >= currentDate
        const matchesDateFilter = !filterDate || event.date === filterDate
        const matchesLocationFilter = !filterLocation || event.location === filterLocation
        return isAfterCurrentDate && matchesDateFilter && matchesLocationFilter
    })

    if (loading) {
        return <div className="flex justify-center items-center h-screen animate-spin"><Loader /></div>
    }

    return (
        <>
            <div className="pt-6">
                <FilterEvents setFilterDate={handleFilterDate} setFilterLocation={handleFilterLocation} events={events} />
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                {filteredEvents.map((event) => {
                    return (
                        <div key={event._id} className="card shadow-md w-72 h-auto  rounded bg-slate-50/5 hover:bg-slate-50/10">
                            <Link href={'/events/' + event._id}>
                                <div className="h-64 w-72">
                                    {event.image ? (
                                        <Image
                                            src={event.image}
                                            width={288}
                                            height={256}
                                            alt={`${event.title} image`}
                                            className="object-cover w-full h-full rounded-t"
                                        />
                                    ) : (
                                        <div className="h-full w-full flex items-center justify-center bg-gray-200">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h2 className="text-2xl font-semibold">{event.title}</h2>
                                    <p>{event.location}</p>
                                    <p>{event.date}</p>
                                    <p>Price: ${event.price}</p>
                                    {event.seats > 0 ? <p>Seats left: {event.seats}</p> : <p className="text-destructive">No seats available!</p>}
                                    
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
