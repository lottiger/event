'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BookEventButton } from "./book-event";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";

export const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { userId } = useAuth();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event data');
        }
        const data = await response.json();
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  return (
    <div>
      {event.image && (
        <Image
          src={event.image}
          alt={event.title}
          width={800}
          height={600}
          className="object-cover w-full h-full"
        />
      )}
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.date}</p>
      <p>Price: ${event.price}</p>
      <p>Seats left: {event.seats}</p>
      <BookEventButton eventId={id} userId={userId} seats={event.seats} setSeats={(newSeats) => setEvent({ ...event, seats: newSeats })} />
    </div>
  );
};
