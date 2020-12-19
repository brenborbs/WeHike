import React from 'react'
import { Grid } from 'semantic-ui-react'
import { EventHeader, EventInfo, EventChat, EventSidebar } from '../components/eventDetail'
import { useSelector } from 'react-redux'

export default function EventDetailedPage({match}) {
const event = useSelector(state => state.event.events.find(e => e.id === match.params.id))

  return (
    <Grid id="fonts">
      <Grid.Column width={10}>
        <EventHeader event={event} />
        <EventInfo event={event} />
        <EventChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
}