import React from 'react';
import { Link } from 'react-router-dom'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './eventListAttendee'
import { useDispatch } from 'react-redux'
import { deleteEvent } from '../../actions/actions'
import { format } from 'date-fns'

export default function EventListItem({ event }) {
  const dispatch = useDispatch()

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {format(event.date, 'MMMM d, yyyy h:mm a')}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div style={{ marginBottom: '1rem' }}>{event.description}</div>
        <div className="event-buttons">
          <Button
            as={Link}
            to={`/hikes/${event.id}`}
            basic
            color="blue"
            // floated="left"
            content="View"
          />
          <Button
            onClick={() => dispatch(deleteEvent(event.id))}
            color="blue"
            // floated="left"
            content="Delete"
          />
        </div>
      </Segment>
    </Segment.Group>
  );
}


