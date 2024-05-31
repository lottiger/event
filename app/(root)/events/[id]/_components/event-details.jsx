'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BookEventButton } from "./book-event";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { Calendar, Euro, Loader, MapPin } from "lucide-react";

export const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { userId } = useAuth();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/events/${id}?id=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event data');
        }
        const data = await response.json();
        console.log(data)
        setEvent(data);
      } catch (error) {
        console.error('Error', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen animate-spin"><Loader/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  return (
    <div className="">
  <h2 className="flex justify-center text-4xl mb-10">{event.title}</h2>
  <div className="">
    <div className="flex flex-col md:flex-row justify-between mb-10 mx-4 md:mx-44">
      <div className="flex items-center gap-1 mb-1">
        <MapPin size={18} />
        <p>{event.location}</p>
      </div>
      <div className="flex items-center gap-1 mb-1">
        <Calendar size={18} />
        <p>{event.date}</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <Euro size={18} />
        <p>{event.price}</p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
      <div className="md:pr-4 mb-6 md:mb-0">
        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
            width={350}
            height={600}
            className="object-cover"
          />
        )}
      </div>
      <div className="md:pl-4 flex-1 text-center md:text-left">
        <p>{event.description}</p>
      </div>
    </div>

    <div className="flex flex-col mt-16 items-center mx-4">
      <div className="mb-6 text-center">
        <p>Tickets left: {event.seats}</p>
      </div>
      <div className="">
        <BookEventButton 
          eventId={id} 
          userId={userId} 
          seats={event.seats} 
          booked={event.booked} 
          setSeats={(newSeats) => setEvent({ ...event, seats: newSeats })} 
        />
      </div>
    </div>
  </div>
</div>


  ) 
};
