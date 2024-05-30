'use client'


import { useUser } from "@clerk/nextjs"
import { Loader, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const ManageBookedEvents = () => {

    const [events, setEvents] = useState([])
    const { user } = useUser()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchEvents = async () => {
          try {
            if (user) {
              const response = await fetch(`http://localhost:3000/api/events?id=${user.id}`);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setEvents(data);
              setLoading(false);
            }
          } catch (error) {
            console.error('Error:', error);
          }

         
        };
      
        fetchEvents();
      }, [user]);

      if (loading) {
        return <div className="flex justify-center items-center h-screen animate-spin"><Loader /></div>;
      }

  return (
    <div>
 <div className='flex flex-col mt-10'>
        {Array.isArray(events) && events.map((event, index) => (
          <div key={index} className=" h-28 overflow-hidden rounded shadow hover:bg-slate-50/10 transition">
            <Link href={`/events/${event._id}`} className="">
             
             
                <div className="flex items-center p-3">
                <Image
                src={event.image}
                alt={event.description}
                width={100}
                height={100}
                className=' rounded h-20 w-20 object-cover mr-4'
              />
             
              <p className='flex-1'>{event.title}</p>
              <p className='flex-1'>{event.date}</p>
              <p className="flex-1">{event.location}</p>
              <Trash className="w-6 h-6 cursor-pointer hover:text-destructive" />
             

              </div>
             
            </Link>
          </div>
        ))}
        </div>
    </div>
  )
}

export default ManageBookedEvents