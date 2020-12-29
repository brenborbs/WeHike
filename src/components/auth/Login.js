import React from 'react'
import { ModalWrapper } from '../modals'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from '../form/textInput' 
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { signIn, closeModal } from '../../actions/actions'

function Login() {
  const dispatch = useDispatch()
  return (
    <ModalWrapper size="mini" header="Login to WeHike">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values,{ setSubmitting }) => {
          dispatch(signIn(values));
          setSubmitting(false)
          dispatch(closeModal())
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <TextInput name="email" placeholder="Email" />
            <TextInput name="password" placeholder="Password" 
            type="password"
            />
            <Button 
            loading={isSubmitting}
            disabled={!isValid || !dirty || isSubmitting}
            type="submit"
            fluid
            size="large"
            color="blue"
            content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}

export { Login }