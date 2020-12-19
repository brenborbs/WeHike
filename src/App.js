import React from 'react';
import EventDashboard from './pages/EventDashboard'
import Header from './components/header'
import HomePage from './pages/HomePage'
import EventDetailedPage from './pages/EventDetailedPage'
import { EventForm } from './components/form' 
import { Container } from 'semantic-ui-react'
import { Route, useLocation } from 'react-router-dom'


function App() {
const { key } = useLocation()
  
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Header  />
            <Container className="main">
              <Route exact path="/hikes" component={EventDashboard} />
              <Route path="/hikes/:id" component={EventDetailedPage} />

              <Route path={["/createHike", "/manage/:id"]} component={EventForm} key={key} />
            
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
