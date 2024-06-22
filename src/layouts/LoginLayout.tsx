import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import React from 'react'
import { UserContext } from '../contexts/UserContext'
import Loading from '../components/Loading'


export default function LoginLayout() {

  const { loaded } = React.useContext(UserContext);

  return <>
    {loaded ?
      <><Header></Header>
        <Container>
          <Outlet />
        </Container></> : <Loading />}
  </>
}
