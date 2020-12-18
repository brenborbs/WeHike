import React, {useState} from 'react';
import EventDashboard from './pages/EventDashboard'
import Header from './components/header'
import { Container } from 'semantic-ui-react'

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }
  function handleCreateFormOpen() {
    setSelectedEvent(null)
    setFormOpen(true)
  }
  return (
    <>
      <Header setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
}

export default App;
