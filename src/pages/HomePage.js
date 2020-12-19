import React from 'react'
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react'
import Mountain from '../images/landing.jpg'

const HeroImage = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Mountain})`,
  minHeight: '100vh',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const subText = {
  fontSize: '20px',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '1px',
    color: 'ghostwhite'
}

export default function Home({ history }) {
  return (
    <Segment inverted textAlign="center" vertical style={HeroImage} className="masthead" id="fonts" >
      <Container>
        <Header as="h1">
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 12 }}
            color="black"
          />
          WeHike
        </Header>
        <p style={subText}>Connect to nature. Explore with your friends</p>
        <Button onClick={() => history.push('/hikes')} size="huge" color="yellow" >
          Get started
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  );
}