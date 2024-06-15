import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


export default function LoginLayout() {

  return <>
    <Header></Header>
    <Container>
      <Outlet />
    </Container>
  </>
}
