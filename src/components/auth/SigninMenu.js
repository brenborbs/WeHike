import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function SignInMenu({ signOut }) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Steve">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createHike"
            text="Create Hike"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item
            text="Signout"
            icon="power"
            onClick={signOut}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

export { SignInMenu } 