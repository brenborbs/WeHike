import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Header, Button } from 'semantic-ui-react'
import cuid from 'cuid'
import { categoryData } from '../../api/categoryOptions'
import TextInput from './textInput'
import TextArea from './textArea'
import SelectInput from './selectInput'
import DateInput from './dateInput'
import { useSelector, useDispatch } from 'react-redux'
import { createEvent, updateEvent } from '../../actions/actions'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

function EventForm({match, history}) {
    const dispatch = useDispatch()
    const selectedEvent = useSelector((state) =>
      state.event.events.find((e) => e.id === match.params.id)
    );

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Title must not be empty'),
    category: Yup.string().required('Category must not be empty'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  
  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: 'Steve',
                  attendees: [],
                  hostPhotoURL: '/assets/user.png',
                })
              );
          history.push('/hikes');
        }}
      >
        {({ isSubmiting, dirty, isValid }) => (
          <Form className="ui form">
            <Header sub color="blue" content="Hiking Details" />
            <TextInput name="title" placeholder="Title" />
            <SelectInput
              name="category"
              placeholder="Category"
              options={categoryData}
            />
            <TextArea name="description" placeholder="Description" rows={3} />
            <Header sub color="blue" content="Location Details" />
            <TextInput name="city" placeholder="City" />
            <TextInput name="venue" placeholder="Location" />
            <DateInput
              name="date"
              placeholderText="Hike date"
              timeFormat="HH:mm"
              showTimeSelect
              TimeCaption="time"
              dateFormat="MMMM d, yyyy h:mm a"
            />
            <Button 
            loading={isSubmiting} 
            disabled={!isValid || !dirty || isSubmiting}
            type="submit" 
            floated="right" 
            positive content="Submit" />
            <Button
            disabled={isSubmiting}
              as={Link}
              to="/hikes"
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}

export { EventForm }