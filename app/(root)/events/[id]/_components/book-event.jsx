'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';

export const BookEventButton = ({ eventId, booked, userId, seats, setSeats }) => {
  const [isBooked, setIsBooked] = useState(booked);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleBookEvent = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/api/events/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to book event');
      }
      const updatedEvent = await response.json();
      setIsBooked(true);
      setSeats(updatedEvent.seats);  

      router.push('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <div className="flex justify-center items-center h-screen animate-spin"><Loader /></div>}
      {error && <p>Error: {error}</p>}
      
      <Button onClick={handleBookEvent} disabled={loading || (seats <= 0 && !isBooked)}>
  {isBooked ? 'Cancel booking' : seats <= 0 ? 'No seats available' : 'Book now!'}
</Button>
    </div>
  );
};
