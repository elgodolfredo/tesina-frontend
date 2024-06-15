import { Container } from '@chakra-ui/react'
import { Outlet, redirect } from 'react-router-dom'
import Header from '../components/Header'
import React from 'react'
import { UserContext } from '../contexts/UserContext'

export default function LoginLayout() {

  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    if (user) {
      console.log('redirecting')
      redirect('/');
    }
  }, [user])

  return <>
    <Header></Header>
    <Container>
      <Outlet />
    </Container>
  </>
}
