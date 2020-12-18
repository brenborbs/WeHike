import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Segment, Header, Form, Button } from 'semantic-ui-react'
import cuid from 'cuid'

function EventForm({
  setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}) {
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  }

  const [values , setValues] = useState(initialValues)

  function handleInputChange(e) {
    const{ name, value } = e.target;
    setValues({...values, [name]:value })
  }

  function handleFormSubmit() {
    selectedEvent 
    ? updateEvent({...selectedEvent, ...values}) 
    : createEvent({
      ...values, 
      id: cuid(), 
      hostedBy: 'Steve', 
      attendees: [], 
      hostPhotoURL: '/assets/user.png'
  })
    setFormOpen(false)
  }
  return (
    <Segment clearing>
      <Header content={ selectedEvent ? "Edit hike" : "Create new hike"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            name="title"
            type="text"
            placeholder="Event title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Category"
            name="category"
            type="text"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Location"
            name="venue"            
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button 
        type="submit" 
        floated="right" 
        color="purple" 
        content="Submit" />
        <Button
          as={Link} to="/hikes"
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}

export { EventForm }