import React from 'react'
import { Grid } from 'semantic-ui-react'
import { EventHeader, EventInfo, EventChat, EventSidebar } from '../components/eventDetail'

export default function EventDetailedPae() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventHeader />
        <EventInfo />
        <EventChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventSidebar />
      </Grid.Column>
    </Grid>
  );
}