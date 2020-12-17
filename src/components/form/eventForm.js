import React from 'react'
import { Segment, Header, Form, Button } from 'semantic-ui-react'

function EventForm({setFormOpen}) {
  return (
    <Segment clearing>
      <Header content="Create new hike" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Location" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Date" />
        </Form.Field>
        <Button type="submit" floated="right" color="purple" content="Submit" />
        <Button onClick={() => setFormOpen(false)} type="submit" floated="right" content="Cancel" />
      </Form>
    </Segment>
  );
}

export { EventForm }