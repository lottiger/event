'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const BookEventButton = ({ eventId, userId, seats, setSeats }) => {
  const [isBooked, setIsBooked] = useState(false);
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
      setSeats(updatedEvent.seats);  // Update seats state with the new count

      // Redirect to the profile page after a successful booking
      router.push('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {isBooked ? (
        <p>Event successfully booked! Redirecting to your profile...</p>
      ) : (
        <Button onClick={handleBookEvent} disabled={loading || seats <= 0}>
          {seats <= 0 ? 'No seats available': 'Book now'}
        </Button>
      )}
    </div>
  );
};
