import React from 'react'
import { Menu, Container, Button  } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import { SignOutMenu, SignInMenu } from '../auth'
import {  useSelector } from 'react-redux'

export default function Header({setFormOpen}) {
  
  const { authenticated } = useSelector(state => state.auth) 

  

  return (
    <Menu fixed="top" id="fonts">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          WeHIKE
        </Menu.Item>
        <Menu.Item as={NavLink} to="/hikes" name="Hikes" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createHike">
            <Button positive content="Create" />
          </Menu.Item>
        )}
        {authenticated 
        ? <SignInMenu /> 
        : <SignOutMenu />
        }
      </Container>
    </Menu>
  );
}