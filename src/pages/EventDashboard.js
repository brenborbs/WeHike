import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { EventList } from '../components/eventList'
import { EventForm } from '../components/form'
import { sampleData } from '../api/sampleData' 

export default function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData)
  

  return (
    <Grid stackable columns={2}>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>{formOpen && <EventForm setFormOpen={setFormOpen} />}</Grid.Column>
    </Grid>
  );
}