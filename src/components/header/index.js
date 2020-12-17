import React from 'react'
import { Menu, Container, Button  } from 'semantic-ui-react';

export default function Header({setFormOpen}) {
  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item header>
          WeHIKE
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button color="pink" onClick={() => setFormOpen(true)} content="Create" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic color="grey" content="Login" />
          <Button color="pink" content="Register" style={{ marginLeft: "0.5em" }} />
        </Menu.Item>
      </Container>
    </Menu>
  )
}