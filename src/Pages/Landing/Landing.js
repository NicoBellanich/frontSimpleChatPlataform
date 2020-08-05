import * as React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import './Landing.scss'
import { BsFillInfoSquareFill as IconInfo } from 'react-icons/bs'
import useCurrentUserQuery from '../../Hooks/useCurrentUserQuery'
import { useHistory } from 'react-router-dom'
import OwnSpinners from '../../Components/OwnSpinners'
import { useApolloClient } from '@apollo/react-hooks'

function Landing () {
  const { currentUser, loading, error } = useCurrentUserQuery()
  const client = useApolloClient()
  const history = useHistory()

  const handleLogOutClick = async () => {
    await client.writeData({ data: { token: null, currentUser: null } })
    localStorage.clear()
    history.push('/')
    return null
  }

  if (loading) {
    return (
      <div className='DisplaySpinners'>
        <OwnSpinners />
      </div>
    )
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!currentUser) {
    return null
  }

  const { id, username, firstname, lastname, password } = currentUser

  return (
    <div className='containerCard'>
      <Card>
        <Card.Header>
          Datos Usuario Ingresado <IconInfo />
        </Card.Header>
        <ListGroup className='cardContent'>
          <ListGroup.Item>
            ID : {id ? <p>{id}</p> : <p>no tiene id</p>}
          </ListGroup.Item>
          <ListGroup.Item>
            User Name :
            {username ? (
              <p>{username}</p>
            ) : (
              <p>no tiene username</p>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            First Name :{' '}
            {firstname ? (
              <p>{firstname}</p>
            ) : (
              <p>no tiene firstname</p>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            Last Name :{' '}
            {lastname ? (
              <p>{lastname}</p>
            ) : (
              <p>no tiene lastname</p>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            Password : <p className='password'>{password}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button className='buttonLogOut' onClick={handleLogOutClick}>
              Logout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}
export default Landing
