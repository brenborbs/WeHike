import React from 'react'
import EvenListItem from './eventListItem'

function EventList({events}) {
  return (
    <>
      {events.map((event) => (
        <EvenListItem event={event} 
        key={event.id} 
        />
      ))}
    </>
  );
}

export { EventList }