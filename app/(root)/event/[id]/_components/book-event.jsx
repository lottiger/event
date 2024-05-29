

'use client';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

export const BookEventButton = ({ eventId, userId }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


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
        throw new Error('Failed to booking event');
      }

      const data = await response.json();

      setIsBooked(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Button onClick={handleBookEvent}> Book now</Button>
    </div>
  );
};
