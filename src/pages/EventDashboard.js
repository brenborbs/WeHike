import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { EventList } from '../components/eventList'
import { sampleData } from '../api/sampleData' 

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData)
  
  
  // function handleCreateEvent(event) {
  //   // create new array with events values
  //   setEvents([...events, event])
  // }

  // function handleUpdateEvent(updatedEvent) {
  //   // map all events and check for id
  //   setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt))
  //   selectEvent(null)
  // }

  function handleDeleteEvent(eventId) {
    // loop and delete id that match the event
    setEvents(events.filter(evt => evt.id !== eventId))
  }
  

  return (
    <Grid stackable columns={2}>
      <Grid.Column width={10}>
        <EventList 
        events={events} 
        deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
       <h2>Event filters</h2>
      </Grid.Column>
    </Grid>
  );
}