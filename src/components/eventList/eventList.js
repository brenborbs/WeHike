import React from 'react'
import EvenListItem from './eventListItem'

function EventList(props) {
  return (
    <>
      {props.events.map((event) => (
        <EvenListItem event={event} key={event.id} />
      ))}
    </>
  );
}

export { EventList }