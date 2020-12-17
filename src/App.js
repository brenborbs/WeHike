import React, {useState} from 'react';
import EventDashboard from './pages/EventDashboard'
import Header from './components/header'
import { Container } from 'semantic-ui-react'

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Header setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
