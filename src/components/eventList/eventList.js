import React from 'react'
import EvenListItem from './eventListItem'

function EventList({events, selectEvent, deleteEvent}) {
  return (
    <>
      {events.map((event) => (
        <EvenListItem event={event} key={event.id} 
        selectEvent={selectEvent}
        deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
}

export { EventList }