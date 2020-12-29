import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../actions/actions'

function SignInMenu() {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.auth)
  const history = useHistory();
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={currentUser.photoURL || '/assets/user.png'} />
      <Dropdown pointing="top left" text={currentUser.email}>
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
            onClick={() => {
              dispatch(signOut());
              history.push('/')
            } 
          }
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

export { SignInMenu } 